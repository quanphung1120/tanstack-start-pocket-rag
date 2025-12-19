import { AppSidebar } from './app-sidebar'
import type { User } from '@workos/authkit-tanstack-react-start'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

interface DashboardLayoutProps {
  user: User
  children: React.ReactNode
}

export function DashboardLayout({ user, children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6 md:px-8 max-w-7xl mx-auto w-full">
          <SidebarTrigger className="-ml-1" />
          {/* Optional: Add search or other global actions here */}
        </header>
        <main className="p-6 md:p-8 max-w-7xl mx-auto w-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
