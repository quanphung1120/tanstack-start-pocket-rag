/**
 * Modern footer for the landing page.
 */
export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold tracking-tight">
              Pocket RAG
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
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

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pocket RAG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
