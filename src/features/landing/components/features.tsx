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
      className="py-32 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Engineered for Depth
            </h2>
            <p className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
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
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Main Feature */}
          <Card className="md:col-span-6 lg:col-span-8 row-span-2 group overflow-hidden border-white/5 bg-muted/30 backdrop-blur-sm shadow-[8px_8px_0px_0px_oklch(var(--primary)/0.1)]">
            <CardHeader className="h-full flex flex-col justify-between p-8">
              <div className="space-y-4">
                <div className="size-12 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  <svg
                    className="size-6"
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
                <CardTitle className="text-3xl font-heading font-black tracking-tighter uppercase">
                  Semantic Search
                </CardTitle>
                <CardDescription className="text-lg font-body leading-relaxed max-w-md">
                  We don't just find keywords. Our AI understands the conceptual
                  link between your question and the source text.
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-background/50 border border-white/5 text-[10px] font-bold uppercase tracking-wider">
                  Vector Indexing
                </div>
                <div className="px-3 py-1 bg-background/50 border border-white/5 text-[10px] font-bold uppercase tracking-wider">
                  Embeddings v3
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Feature 2 */}
          <Card className="md:col-span-3 lg:col-span-4 group border-white/5 bg-muted/30 backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--chart-2)/0.1)]">
            <CardHeader className="p-8">
              <div className="size-10 bg-chart-2/10 flex items-center justify-center text-chart-2 mb-4 border border-chart-2/20">
                <svg
                  className="size-5"
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
              <CardTitle className="text-xl font-heading font-black tracking-tighter uppercase">
                Lightning Fast
              </CardTitle>
              <CardDescription className="font-body">
                Response times under 200ms with our optimized retrieval
                pipeline.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 3 */}
          <Card className="md:col-span-3 lg:col-span-4 group border-white/5 bg-muted/30 backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--foreground)/0.05)]">
            <CardHeader className="p-8">
              <div className="size-10 bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 border border-emerald-500/20">
                <svg
                  className="size-5"
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
              <CardTitle className="text-xl font-heading font-black tracking-tighter uppercase">
                Privacy First
              </CardTitle>
              <CardDescription className="font-body">
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
