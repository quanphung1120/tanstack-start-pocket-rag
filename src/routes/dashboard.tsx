import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { getAuth, getSignInUrl } from '@workos/authkit-tanstack-react-start'
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout'

export const Route = createFileRoute('/dashboard')({
  loader: async () => {
    const { user } = await getAuth()

    if (!user) {
      const signInUrl = await getSignInUrl({ data: '/dashboard' })
      throw redirect({ href: signInUrl })
    }

    return { user }
  },
  component: DashboardLayoutComponent,
})

function DashboardLayoutComponent() {
  const data = Route.useLoaderData()

  if (!data?.user) return null

  return (
    <DashboardLayout user={data.user}>
      <Outlet />
    </DashboardLayout>
  )
}
