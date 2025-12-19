import { createFileRoute } from '@tanstack/react-router'
import { getAuth } from '@workos/authkit-tanstack-react-start'
import { Header } from '@/features/landing/components/header'
import { Hero } from '@/features/landing/components/hero'
import { Features } from '@/features/landing/components/features'
import { Pricing } from '@/features/landing/components/pricing'
import { Footer } from '@/features/landing/components/footer'

/**
 * Landing page route configuration.
 * Loads authentication state to conditionally render navigation.
 */
export const Route = createFileRoute('/')({
  loader: async () => {
    const { user } = await getAuth()
    return { user }
  },
  component: LandingPage,
})

function LandingPage() {
  const { user } = Route.useLoaderData()

  return (
    <>
      <Header user={user} />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
