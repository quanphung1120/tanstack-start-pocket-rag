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
      <SidebarInset className="bg-background overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6 md:px-8 max-w-7xl mx-auto w-full">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex-1 min-h-0 overflow-hidden p-6 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
