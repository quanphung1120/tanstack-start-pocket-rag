import { SparklesIcon } from 'lucide-react'
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion'

const SUGGESTIONS = [
  'Summarize my recent document',
  'Explain key concepts',
  'Extract action items',
  'Compare documents',
]

interface ChatEmptyStateProps {
  userName: string
  onSelectSuggestion: (suggestion: string) => void
}

export function ChatEmptyState({
  userName,
  onSelectSuggestion,
}: ChatEmptyStateProps) {
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <section
      className="flex flex-col items-center justify-center h-full px-4 py-16"
      aria-labelledby="chat-greeting"
    >
      <SparklesIcon
        className="size-12 p-3 rounded-xl bg-primary/10 text-primary mb-6"
        aria-hidden="true"
      />
      <h1
        id="chat-greeting"
        className="text-2xl md:text-3xl font-heading font-semibold tracking-tight text-foreground text-center mb-2"
      >
        {greeting}, {userName}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base font-body text-center max-w-md mb-8">
        How can I help you today?
      </p>
      <Suggestions className="justify-center flex-wrap">
        {SUGGESTIONS.map((suggestion) => (
          <Suggestion
            key={suggestion}
            suggestion={suggestion}
            onClick={onSelectSuggestion}
            className="transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/20"
          />
        ))}
      </Suggestions>
    </section>
  )
}
