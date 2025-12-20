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
      className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center"
      aria-labelledby="chat-greeting"
    >
      <h1
        id="chat-greeting"
        className="text-2xl md:text-3xl font-heading font-semibold tracking-tight text-foreground mb-2"
      >
        {greeting}, {userName}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base font-body max-w-md mb-8">
        How can I help you today?
      </p>
      <Suggestions
        asScrollArea={false}
        className="justify-center flex-wrap w-full"
      >
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
