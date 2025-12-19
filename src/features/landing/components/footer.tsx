/**
 * Modern footer for the landing page.
 */
export function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold tracking-tight text-sm sm:text-base">
              Pocket RAG
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Pocket RAG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
