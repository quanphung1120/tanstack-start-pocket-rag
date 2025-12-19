import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/**
 * Features section with max-width container.
 */
export function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Engineered for Depth
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              Beyond simple search. <br />
              <span className="text-muted-foreground">
                True document intelligence.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-border hidden lg:block" />
            <p className="text-sm text-muted-foreground font-medium max-w-[200px]">
              Leveraging state-of-the-art RAG architectures for precision.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto sm:auto-rows-[200px] lg:auto-rows-[240px]">
          {/* Main Feature */}
          <Card className="sm:col-span-2 lg:col-span-8 lg:row-span-2 group overflow-hidden border-white/5 bg-muted/30 backdrop-blur-sm shadow-[8px_8px_0px_0px_oklch(var(--primary)/0.1)]">
            <CardHeader className="h-full flex flex-col justify-between p-5 sm:p-6 lg:p-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="size-10 sm:size-12 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  <svg
                    className="size-5 sm:size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-heading font-black tracking-tighter uppercase">
                  Semantic Search
                </CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg font-body leading-relaxed max-w-md">
                  We don't just find keywords. Our AI understands the conceptual
                  link between your question and the source text.
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-background/50 border border-white/5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Vector Indexing
                </div>
                <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-background/50 border border-white/5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Embeddings v3
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Feature 2 */}
          <Card className="lg:col-span-4 group border-white/5 bg-muted/30 backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--chart-2)/0.1)]">
            <CardHeader className="p-5 sm:p-6 lg:p-8">
              <div className="size-8 sm:size-10 bg-chart-2/10 flex items-center justify-center text-chart-2 mb-3 sm:mb-4 border border-chart-2/20">
                <svg
                  className="size-4 sm:size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <CardTitle className="text-lg sm:text-xl font-heading font-black tracking-tighter uppercase">
                Lightning Fast
              </CardTitle>
              <CardDescription className="text-sm font-body">
                Response times under 200ms with our optimized retrieval
                pipeline.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 3 */}
          <Card className="lg:col-span-4 group border-white/5 bg-muted/30 backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--foreground)/0.05)]">
            <CardHeader className="p-5 sm:p-6 lg:p-8">
              <div className="size-8 sm:size-10 bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-3 sm:mb-4 border border-emerald-500/20">
                <svg
                  className="size-4 sm:size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <CardTitle className="text-lg sm:text-xl font-heading font-black tracking-tighter uppercase">
                Privacy First
              </CardTitle>
              <CardDescription className="text-sm font-body">
                Your data is encrypted at rest and never used for training
                foundation models.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
