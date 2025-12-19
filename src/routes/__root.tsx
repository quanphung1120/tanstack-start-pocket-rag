import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ThemeProvider } from 'tanstack-theme-kit'
import { AuthKitProvider } from '@workos/authkit-tanstack-react-start/client'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import appCss from '../styles.css?url'
import type { QueryClient } from '@tanstack/react-query'
import { ErrorPage } from '@/components/error-page'
import { NotFoundPage } from '@/components/not-found-page'

/**
 * Root route configuration for the TanStack Start application.
 * Configures the shell component, error boundaries, and not-found handling.
 */
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  /**
   * Default component renders the child routes via Outlet
   */
  component: RootComponent,

  /**
   * Error boundary component - uses brand styling for a consistent UX
   */
  errorComponent: ({ error, reset }) => (
    <ErrorPage error={error} reset={reset} />
  ),

  /**
   * Not found component - displayed when no route matches
   */
  notFoundComponent: () => <NotFoundPage />,

  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pocket RAG - Your Docs, Reimagined' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),

  shellComponent: RootDocument,
})

/**
 * Root component renders the Outlet for child routes.
 */
function RootComponent() {
  return <Outlet />
}

/**
 * Root document wraps the entire application with providers and the HTML structure.
 */
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthKitProvider>
        <head>
          <HeadContent />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>

          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              {
                name: 'React Query',
                render: <ReactQueryDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </body>
      </AuthKitProvider>
    </html>
  )
}
