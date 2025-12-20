import { useChatStatus } from '@ai-sdk-tools/store'
import { ChatModelSelector } from './chat-model-selector'
import type { ChangeEvent } from 'react'
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const MAX_WORDS = 200

interface ChatInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (message: { text: string }) => void
  onStop: () => void
}

/**
 * Chat input component with textarea, model selector, and submit button.
 * Uses useChatStatus from @ai-sdk-tools/store for streaming state.
 * Model selection is handled via ChatModelContext.
 */
export function ChatInput({
  value,
  onChange,
  onSubmit,
  onStop,
}: ChatInputProps) {
  const status = useChatStatus()
  const isLoading = status === 'streaming' || status === 'submitted'

  const wordCount = value.trim() === '' ? 0 : value.trim().split(/\s+/).length
  const isOverLimit = wordCount > MAX_WORDS

  return (
    <footer className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 z-40 pointer-events-none">
      <PromptInput
        onSubmit={onSubmit}
        className="bg-background/95 backdrop-blur-md rounded-2xl border border-border/60 shadow-xl pointer-events-auto ring-1 ring-black/5 dark:ring-white/5 transition-all overflow-hidden"
      >
        <PromptInputTextarea
          placeholder="Tell me something, I'm listening..."
          value={value}
          onChange={onChange}
          aria-label="Chat message"
          aria-describedby="word-count-status"
          className="min-h-[52px] max-h-[200px] border-none focus-visible:ring-0 px-4 py-3 bg-transparent resize-none overflow-y-auto"
        />

        <PromptInputFooter className="px-4 py-2 border-t border-border/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ChatModelSelector />

            <output
              id="word-count-status"
              aria-live="polite"
              className={cn(
                'text-[10px] font-medium tracking-wider uppercase',
                isOverLimit ? 'text-destructive' : 'text-muted-foreground/60',
              )}
            >
              {wordCount} / {MAX_WORDS} words
            </output>

            {isOverLimit && (
              <Badge variant="destructive" className="h-4 px-1 text-[9px]">
                Too long
              </Badge>
            )}
          </div>

          <PromptInputSubmit
            status={isLoading ? 'streaming' : undefined}
            disabled={(!value.trim() || isOverLimit) && !isLoading}
            onClick={isLoading ? onStop : undefined}
            aria-label={isLoading ? 'Stop generating' : 'Send message'}
            className={cn(
              'rounded-xl transition-all h-9 w-9',
              isLoading
                ? 'bg-destructive/10 text-destructive hover:bg-destructive/20'
                : 'bg-primary text-primary-foreground shadow-lg hover:shadow-primary/20',
            )}
          />
        </PromptInputFooter>
      </PromptInput>
    </footer>
  )
}
