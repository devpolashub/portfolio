import type { ReactNode } from "react";
import Logo from "@/components/logo";

export function StatusPage({ children }: { children: ReactNode }) {
  return (
    <main className='flex flex-col justify-center items-center gap-8 px-4 py-16 w-full min-h-[75svh] brand-glow-bg'>
      <Logo priority />

      <div className='w-full'>{children}</div>
    </main>
  );
}
