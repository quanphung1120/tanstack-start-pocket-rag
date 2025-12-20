import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import {
  Provider,
  useChat,
  useChatMessages,
  useChatStatus,
} from '@ai-sdk-tools/store'
import { DefaultChatTransport } from 'ai'
import { CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { AIDevtools } from '@ai-sdk-tools/devtools'
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation'
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
  MessageResponse,
  MessageToolbar,
} from '@/components/ai-elements/message'
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning'
import { cn } from '@/lib/utils'
import { ChatEmptyState } from '@/features/chat/components/chat-empty-state'
import { ChatInput } from '@/features/chat/components/chat-input'
import {
  ChatModelProvider,
  useChatModel,
} from '@/features/chat/context/chat-model-context'

const dashboardRoute = getRouteApi('/dashboard')

export const Route = createFileRoute('/dashboard/chat')({
  component: ChatPage,
})

/**
 * Chat page wrapper that provides both model and message contexts.
 */
function ChatPage() {
  return (
    <ChatModelProvider>
      <Provider initialMessages={[]}>
        <ChatContent />
      </Provider>
    </ChatModelProvider>
  )
}

/**
 * Inner chat content that consumes both contexts.
 * Uses @ai-sdk-tools/store for high-performance message handling.
 */
function ChatContent() {
  const { user } = dashboardRoute.useLoaderData()
  const [input, setInput] = useState('')
  const { selectedModel } = useChatModel()

  const { sendMessage, stop } = useChat({
    id: `chat-${selectedModel}`,
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { model: selectedModel },
    }),
  })

  const handleSubmit = (message: { text: string }) => {
    if (!message.text.trim()) return
    sendMessage({ text: message.text })
    setInput('')
  }

  const handleSuggestion = (suggestion: string) => {
    sendMessage({ text: suggestion })
  }

  return (
    <main
      className="flex relative flex-col max-w-3xl mx-auto group h-[calc(100dvh-7rem)] md:h-[calc(100dvh-8rem)]"
      aria-label="Chat conversation"
    >
      <Conversation className="flex-1 min-h-0">
        <ConversationContent className="py-6 px-4 space-y-6 pb-32 no-scrollbar">
          <MessageList
            userName={user.firstName || 'there'}
            onSelectSuggestion={handleSuggestion}
          />
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
        onStop={stop}
      />
      {process.env.NODE_ENV === 'development' && (
        <AIDevtools
          enabled={true}
          config={{
            position: 'bottom',
            height: 400,
            streamCapture: {
              enabled: true,
              endpoint: '/api/chat',
              autoConnect: true,
            },
            throttle: {
              enabled: true,
              interval: 100,
              includeTypes: ['text-delta'],
            },
          }}
          debug={true}
        />
      )}
    </main>
  )
}

/**
 * Message list component with O(1) message access.
 * Separated for optimal re-rendering performance.
 */
interface MessageListProps {
  userName: string
  onSelectSuggestion: (suggestion: string) => void
}

function MessageList({ userName, onSelectSuggestion }: MessageListProps) {
  const messages = useChatMessages()
  const status = useChatStatus()
  const isLoading = status === 'streaming' || status === 'submitted'

  const handleCopy = (parts: (typeof messages)[0]['parts']) => {
    const text = parts
      .filter((p) => p.type === 'text')
      .map((p) => (p as { text: string }).text)
      .join('\n')
    navigator.clipboard.writeText(text)
  }

  if (messages.length === 0) {
    return (
      <ChatEmptyState
        userName={userName}
        onSelectSuggestion={onSelectSuggestion}
      />
    )
  }

  return (
    <>
      {messages.map((m) => (
        <Message key={m.id} from={m.role} className="max-w-full">
          <MessageContent
            className={cn(
              m.role === 'assistant' && 'w-full',
              m.role === 'user' &&
                'px-4 py-3 border bg-primary! text-primary-foreground! border-primary/20',
            )}
          >
            {m.parts.map((part, i) =>
              part.type === 'text' ? (
                <MessageResponse key={i}>{part.text}</MessageResponse>
              ) : part.type === 'reasoning' ? (
                <Reasoning
                  key={i}
                  isStreaming={
                    isLoading &&
                    m.role === 'assistant' &&
                    i === m.parts.length - 1
                  }
                >
                  <ReasoningTrigger />
                  <ReasoningContent>{part.text}</ReasoningContent>
                </Reasoning>
              ) : null,
            )}
            {m.role === 'assistant' && (
              <MessageToolbar className="opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                <MessageActions>
                  <MessageAction
                    tooltip="Copy"
                    onClick={() => handleCopy(m.parts)}
                    aria-label="Copy message to clipboard"
                  >
                    <CopyIcon className="size-3.5" aria-hidden="true" />
                  </MessageAction>
                </MessageActions>
              </MessageToolbar>
            )}
          </MessageContent>
        </Message>
      ))}
    </>
  )
}
