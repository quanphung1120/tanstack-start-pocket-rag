import { Link, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Home, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'

/**
 * Not Found (404) page component for TanStack Router.
 * Uses the same visual style as the landing page: modern, minimal, with
 * backdrop blur effects and the brand's design language.
 */
export function NotFoundPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Decor - matching landing page style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_50%)] opacity-10 dark:opacity-20" />
      <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-chart-4/20 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[25%] left-[10%] w-80 h-80 bg-primary/10 blur-[120px] -z-10" />

      <section className="max-w-2xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
        {/* 404 Large Text */}
        <div className="relative mb-8">
          <span className="text-[8rem] md:text-[12rem] font-heading font-extrabold tracking-tighter leading-none text-muted/30 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-24 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Search className="size-12" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-primary" />
          </span>
          Page Not Found
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight mb-4">
          Lost in the{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-chart-2 uppercase italic">
            Void
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground font-body max-w-md mx-auto leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="h-12 px-8 text-sm font-bold shadow-[4px_4px_0px_0px_oklch(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Link preload={false} to="/">
              <Home className="size-4 mr-2" />
              BACK TO HOME
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 px-8 text-sm font-medium border-border/10 bg-background/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_oklch(var(--border))]"
          >
            <Link preload={false} to="/" hash="features">
              <Search className="size-4 mr-2" />
              EXPLORE FEATURES
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
