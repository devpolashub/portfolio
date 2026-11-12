import RouteNavbar from "@/components/navbar/routes/route-navbar";
import type { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='flex flex-col bg-background w-full min-h-dvh'>
      <RouteNavbar />

      <div id='main-content' className='flex-1 w-full'>
        {children}
      </div>
    </div>
  );
}
