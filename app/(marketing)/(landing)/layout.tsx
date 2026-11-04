import Footer from "@/components/footer/footer";
import HomeNavbar from "@/components/navbar/home/home-navbar";
import type { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className='flex flex-col bg-background w-full min-h-screen'>
      <HomeNavbar />
      <div
        id='main-content'
        className={`w-11/12 lg:w-10/12 mx-auto flex-1 py-6`}
      >
        {children}
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
