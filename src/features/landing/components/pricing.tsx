import { Check } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const TIER_FEATURES = [
  'Up to 5 Documents Max',
  'Semantic Search API',
  'Advanced RAG Pipeline',
  'Discord Community Support',
  'Full Beta Access',
]

/**
 * Modern pricing section for the landing page.
 */
export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Simple Pricing
          </h2>
          <p className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
            Scale as you grow.
          </p>
        </div>

        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-chart-2/30 blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative bg-card/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 shadow-2xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-heading font-black tracking-tighter uppercase mb-2">
                  Beta Access
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  Currently free while we're in early access.
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-heading font-black tracking-tighter">
                  Free
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  During Beta
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {TIER_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="w-full h-12 font-bold shadow-[4px_4px_0px_0px_oklch(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <Link to="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
