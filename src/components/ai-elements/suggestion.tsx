'use client'

import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export type SuggestionsProps = ComponentProps<'div'> & {
  asScrollArea?: boolean
}

export const Suggestions = ({
  className,
  children,
  asScrollArea = true,
  ...props
}: SuggestionsProps) => {
  const content = (
    <div
      data-slot="suggestions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )

  if (!asScrollArea) return content

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      {content}
      <ScrollBar className="hidden" orientation="horizontal" />
    </ScrollArea>
  )
}

export type SuggestionProps = Omit<ComponentProps<typeof Button>, 'onClick'> & {
  suggestion: string
  onClick?: (suggestion: string) => void
}

export const Suggestion = ({
  suggestion,
  onClick,
  className,
  variant = 'outline',
  size = 'sm',
  children,
  ...props
}: SuggestionProps) => {
  const handleClick = () => {
    onClick?.(suggestion)
  }

  return (
    <Button
      className={cn('cursor-pointer rounded-none', className)}
      onClick={handleClick}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {children || suggestion}
    </Button>
  )
}
