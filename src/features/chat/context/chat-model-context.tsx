import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Available chat models with their provider identifiers.
 * These IDs are used when making API requests.
 */
export const CHAT_MODELS = {
  KIMI_K2: 'moonshotai/kimi-k2-thinking',
  PERPLEXITY_SONAR: 'perplexity/sonar',
  XAI_GROK: 'xai/grok-4.1-fast-reasoning',
} as const

export type ChatModel = (typeof CHAT_MODELS)[keyof typeof CHAT_MODELS]

/**
 * Display information for each model (name, description, color indicator)
 */
export const MODEL_INFO: Record<
  ChatModel,
  { name: string; description: string; color: string }
> = {
  [CHAT_MODELS.KIMI_K2]: {
    name: 'Kimi K2 Thinking',
    description: 'Advanced reasoning',
    color: 'bg-emerald-500',
  },
  [CHAT_MODELS.PERPLEXITY_SONAR]: {
    name: 'Perplexity Sonar',
    description: 'Web-enhanced search',
    color: 'bg-blue-500',
  },
  [CHAT_MODELS.XAI_GROK]: {
    name: 'xAI Grok 4.1',
    description: 'Fast reasoning',
    color: 'bg-purple-500',
  },
}

// --- Context Definition ---

interface ChatModelContextValue {
  selectedModel: ChatModel
  setSelectedModel: (model: ChatModel) => void
  modelInfo: (typeof MODEL_INFO)[ChatModel]
}

const ChatModelContext = createContext<ChatModelContextValue | null>(null)

// --- Provider Component ---

interface ChatModelProviderProps {
  children: ReactNode
  defaultModel?: ChatModel
}

/**
 * Provides chat model state to the component tree.
 * Wrap your chat-related components with this provider.
 */
export function ChatModelProvider({
  children,
  defaultModel = CHAT_MODELS.KIMI_K2,
}: ChatModelProviderProps) {
  const [selectedModel, setSelectedModel] = useState<ChatModel>(defaultModel)

  const value: ChatModelContextValue = {
    selectedModel,
    setSelectedModel,
    modelInfo: MODEL_INFO[selectedModel],
  }

  return (
    <ChatModelContext.Provider value={value}>
      {children}
    </ChatModelContext.Provider>
  )
}

// --- Hook ---

/**
 * Hook to access the current chat model context.
 * Must be used within a ChatModelProvider.
 */
export function useChatModel(): ChatModelContextValue {
  const context = useContext(ChatModelContext)

  if (!context) {
    throw new Error('useChatModel must be used within a ChatModelProvider')
  }

  return context
}
