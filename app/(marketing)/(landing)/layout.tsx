import Footer from "@/components/footer/footer";
import HomeNavbar from "@/components/navbar/home/home-navbar";
import type { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='flex flex-col bg-background w-full min-h-dvh'>
      <HomeNavbar />

      <div id='main-content' className='flex-1 w-full'>
        {children}
      </div>

      <Footer />
    </div>
  );
}
