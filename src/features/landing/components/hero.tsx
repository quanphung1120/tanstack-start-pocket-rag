import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

/**
 * Hero section with max-width container and two-column layout.
 * Optimized animations to reduce flickering during page load:
 * - Uses CSS `will-change` for GPU-accelerated transforms
 * - Gentler background animations with longer durations
 * - Staggered entry animations with appropriate delays
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor - static gradients without continuous animation */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_50%)] opacity-10 dark:opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute top-[5%] right-[2%] w-64 h-64 bg-chart-4/20 blur-[100px] -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-primary/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Content - staggered fade-in animation */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-primary" />
              </span>
              Next-Gen AI Knowledge
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] text-balance text-center lg:text-left">
              Your Docs <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-chart-2 uppercase italic pr-2">
                Reimagined
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Pocket RAG transforms static documentation into an interactive
              intelligence hub. Upload any file and start a meaningful dialogue
              with your data.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                asChild
                className="h-10 px-6 text-xs sm:h-12 sm:px-8 sm:text-sm font-bold shadow-[4px_4px_0px_0px_oklch(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <Link preload={false} to="/dashboard">
                  START BUILDING
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-10 px-6 text-xs sm:h-12 sm:px-8 sm:text-sm font-medium border-border/10 bg-background/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_oklch(var(--border))]"
              >
                <Link preload={false} to="/" hash="features">
                  VIEW CAPABILITIES
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 grayscale opacity-50">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Trusted by
              </span>
              <div className="flex gap-4">
                <div className="h-4 w-16 bg-muted-foreground/20" />
                <div className="h-4 w-20 bg-muted-foreground/20" />
                <div className="h-4 w-12 bg-muted-foreground/20" />
              </div>
            </div>
          </div>

          {/* Chat mockup - delayed entry animation */}
          <div className="lg:col-span-5 relative group animate-in fade-in slide-in-from-right-8 duration-700 delay-150 fill-mode-both">
            <div
              className="absolute -inset-1 bg-linear-to-r from-primary/50 to-chart-2/50 blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              aria-hidden="true"
            />
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Chat mockup component displaying a simulated conversation.
 * Uses minimal animations to prevent flickering.
 */
function ChatMockup() {
  return (
    <div className="relative bg-card/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Window Chrome */}
      <div className="flex items-center justify-between px-3 py-3 sm:px-5 sm:py-4 border-b border-white/5 bg-background/40">
        <div className="flex lg:gap-1.5 gap-1">
          <div className="size-2 sm:size-2.5 bg-red-500/50" />
          <div className="size-2 sm:size-2.5 bg-amber-500/50" />
          <div className="size-2 sm:size-2.5 bg-emerald-500/50" />
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="size-1.5 sm:size-2 bg-emerald-500" />
          <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            Session Active
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 min-h-[280px] sm:min-h-[360px] font-body">
        {/* Context loaded indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-primary/5 border border-primary/10 text-[10px] sm:text-xs text-primary/80 font-medium">
          <div className="p-0.5 sm:p-1 bg-primary/10">
            <svg
              className="size-2.5 sm:size-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="text-foreground/60">2 sources loaded</span>
          <span className="text-foreground font-bold font-mono truncate">
            transformer_paper.pdf
          </span>
        </div>

        {/* User message */}
        <div className="flex flex-col items-end gap-1.5 sm:gap-2">
          <div className="px-3 py-2 sm:px-4 sm:py-2.5 bg-primary text-primary-foreground text-xs sm:text-sm font-medium border border-primary/20 max-w-[85%]">
            How does attention work in transformers?
          </div>
          <span className="text-[8px] sm:text-[10px] text-muted-foreground font-mono">
            2:34 PM
          </span>
        </div>

        {/* AI response */}
        <div className="flex flex-col items-start gap-1.5 sm:gap-2">
          <div className="px-3 py-2 sm:px-4 sm:py-3 bg-muted/80 text-xs sm:text-sm leading-relaxed border border-white/5 max-w-[90%]">
            Based on <span className="text-primary font-bold">Section 3.2</span>
            , attention computes a weighted sum of values using{' '}
            <span className="font-semibold">Query, Key, Value</span> matrices.
            The formula is{' '}
            <code className="px-1 py-0.5 sm:px-1.5 bg-background text-[9px] sm:text-[11px] font-mono border border-border/50">
              softmax(QK^T/√d)V
            </code>
          </div>
          <span className="text-[8px] sm:text-[10px] text-muted-foreground font-mono">
            2:34 PM · from transformer_paper.pdf, page 5
          </span>
        </div>
      </div>

      {/* Input area */}
      <div className="p-3 sm:p-4 bg-background/40 border-t border-white/5">
        <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-background/50 border border-white/5 text-xs sm:text-sm text-muted-foreground group-hover:border-primary/20 transition-colors duration-300">
          <span className="font-mono">Type your query...</span>
          <div className="ml-auto hidden sm:flex items-center gap-1.5">
            <div className="px-1.5 py-0.5 bg-muted text-[10px] font-bold border border-border">
              ⌘
            </div>
            <div className="px-1.5 py-0.5 bg-muted text-[10px] font-bold border border-border">
              K
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
