import { createFileRoute, redirect } from '@tanstack/react-router'
import { getAuth, getSignInUrl } from '@workos/authkit-tanstack-react-start'

export const Route = createFileRoute('/dashboard/')({
  loader: async () => {
    const { user } = await getAuth()

    if (!user) {
      const signInUrl = await getSignInUrl({ data: '/dashboard' })
      throw redirect({ href: signInUrl })
    }

    return { user }
  },
  component: DashboardPage,
})

function DashboardPage() {
  const { user } = Route.useLoaderData()
  return <div>Welcome, {user.firstName}!</div>
}
