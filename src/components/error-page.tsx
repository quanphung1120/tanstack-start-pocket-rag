import { Link, useRouter } from '@tanstack/react-router'
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

/**
 * Error page component for TanStack Router errors.
 * Uses the same visual style as the landing page: modern, minimal, with
 * backdrop blur effects and the brand's design language.
 */
interface ErrorPageProps {
  error: Error
  reset?: () => void
}

export function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter()

  const handleReset = () => {
    if (reset) {
      reset()
    } else {
      router.invalidate()
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Decor - matching landing page style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,var(--destructive)_0%,transparent_50%)] opacity-10 dark:opacity-15" />
      <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-destructive/20 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[25%] left-[10%] w-80 h-80 bg-chart-4/10 blur-[120px] -z-10" />

      <section className="max-w-2xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center size-20 mb-8 bg-destructive/10 border border-destructive/20 text-destructive">
          <AlertTriangle className="size-10" strokeWidth={1.5} />
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-destructive opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-destructive" />
          </span>
          Something Went Wrong
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight mb-4">
          Oops! An{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-destructive via-destructive/80 to-chart-4 uppercase italic">
            Error
          </span>{' '}
          Occurred
        </h1>

        {/* Error Message */}
        <p className="text-lg text-muted-foreground font-body max-w-md mx-auto leading-relaxed mb-4">
          We encountered an unexpected issue. Don't worry, our systems are
          designed to recover gracefully.
        </p>

        {/* Technical Details */}
        <div className="bg-muted/30 border border-white/5 backdrop-blur-sm p-4 mb-8 text-left max-w-md mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Technical Details
          </p>
          <code className="text-sm text-foreground/80 font-mono break-all">
            {error.message || 'Unknown error occurred'}
          </code>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            onClick={handleReset}
            className="h-12 px-8 text-sm font-bold shadow-[4px_4px_0px_0px_oklch(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <RefreshCw className="size-4 mr-2" />
            TRY AGAIN
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 px-8 text-sm font-medium border-border/10 bg-background/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_oklch(var(--border))]"
          >
            <Link to="/">
              <Home className="size-4 mr-2" />
              BACK TO HOME
            </Link>
          </Button>
        </div>

        {/* Footer Link */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="size-4" />
          <button
            type="button"
            onClick={() => router.history.back()}
            className="font-medium hover:text-foreground transition-colors"
          >
            Go back to previous page
          </button>
        </div>
      </section>
    </main>
  )
}
