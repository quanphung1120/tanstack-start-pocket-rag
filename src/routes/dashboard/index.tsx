import { createFileRoute, getRouteApi } from '@tanstack/react-router'

const dashboardRoute = getRouteApi('/dashboard')

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  // Access the parent layout's loader data
  const { user } = dashboardRoute.useLoaderData()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-extrabold tracking-tight">
          Welcome back, {user.firstName}!
        </h2>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your documents today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-1">Total Documents</h3>
          <p className="text-3xl font-bold">128</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-1">Knowledge Bases</h3>
          <p className="text-3xl font-bold">4</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-1">API Requests</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-8 shadow-sm h-64 flex items-center justify-center text-muted-foreground italic">
        Activity chart placeholder
      </div>
    </div>
  )
}
