import { Image } from '@unpic/react'
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
          <Card className="sm:col-span-2 lg:col-span-8 lg:row-span-2 group relative overflow-hidden border-white/5 bg-muted/80 dark:bg-muted/30 backdrop-blur-none dark:backdrop-blur-sm shadow-[8px_8px_0px_0px_oklch(var(--primary)/0.1)]">
            <div className="absolute inset-0 z-0">
              <Image
                layout="fullWidth"
                src="/images/feature-semantic-search.png"
                alt=""
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 dark:from-background/90 via-background/20 dark:via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 lg:p-8">
              <div className="space-y-3 sm:space-y-4">
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
          <Card className="lg:col-span-4 group relative overflow-hidden border-white/5 bg-muted/80 dark:bg-muted/30 backdrop-blur-none dark:backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--chart-2)/0.1)]">
            <div className="absolute inset-0 z-0">
              <Image
                layout="fullWidth"
                src="/images/feature-lightning-fast.png"
                alt=""
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 dark:from-background/90 via-background/20 dark:via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative z-10 p-5 sm:p-6 lg:p-8">
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
          <Card className="lg:col-span-4 group relative overflow-hidden border-white/5 bg-muted/80 dark:bg-muted/30 backdrop-blur-none dark:backdrop-blur-sm shadow-[6px_6px_0px_0px_oklch(var(--foreground)/0.05)]">
            <div className="absolute inset-0 z-0">
              <Image
                layout="fullWidth"
                src="/images/feature-privacy-first.png"
                alt=""
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 dark:from-background/90 via-background/20 dark:via-background/40 to-transparent" />
            </div>
            <CardHeader className="relative z-10 p-5 sm:p-6 lg:p-8">
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
