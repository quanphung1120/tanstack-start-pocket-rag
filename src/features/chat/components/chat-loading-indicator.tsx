export function ChatLoadingIndicator() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
      <span className="size-1.5 bg-primary rounded-full animate-bounce" />
      <span
        className="size-1.5 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: '150ms' }}
      />
      <span
        className="size-1.5 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: '300ms' }}
      />
    </div>
  )
}
