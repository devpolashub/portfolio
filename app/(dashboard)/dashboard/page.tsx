import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const iframeHeight = "800px";

export const description = "A sidebar with a header and a search form.";

export default function Page() {
  return (
    <div className='[--header-height:calc(--spacing(14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar />
          <SidebarInset>
            <div className='flex flex-col flex-1 gap-4 p-4'>
              <div className='gap-4 grid md:grid-cols-3 auto-rows-min'>
                <div className='bg-muted/50 rounded-xl aspect-video' />
                <div className='bg-muted/50 rounded-xl aspect-video' />
                <div className='bg-muted/50 rounded-xl aspect-video' />
              </div>
              <div className='flex-1 bg-muted/50 rounded-xl min-h-[100vh] md:min-h-min' />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
