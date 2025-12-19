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

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,

  errorComponent: ({ error, reset }) => (
    <ErrorPage error={error} reset={reset} />
  ),

  notFoundComponent: () => <NotFoundPage />,

  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pocket RAG - Your Docs, Reimagined' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),

  shellComponent: RootDocument,
})

function RootComponent() {
  return <Outlet />
}

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
