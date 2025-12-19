import { Link } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'tanstack-theme-kit'

import type { User } from '@workos/authkit-tanstack-react-start'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  user: User | null
}

export function Header({ user }: HeaderProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 dark:border-white/5 bg-background/50 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl font-heading font-extrabold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span>Pocket RAG</span>
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            hash="features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            to="/"
            hash="pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9"
          >
            {theme === 'dark' ? (
              <Sun className="size-[1.2rem] transition-all" />
            ) : (
              <Moon className="size-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="h-4 w-px bg-border/50 mx-2 hidden sm:block" />

          {!user ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:inline-flex font-medium"
              >
                <Link to="/dashboard">Login</Link>
              </Button>

              <Button
                asChild
                className="h-11 px-6 font-semibold shadow-md shadow-primary/10"
              >
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </>
          ) : (
            <Button
              asChild
              className="h-11 px-6 font-semibold shadow-md shadow-primary/10"
            >
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  )
}
