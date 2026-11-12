import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className='flex flex-col bg-background w-full min-h-screen'>
      {children}
    </main>
  );
}
