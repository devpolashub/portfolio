"use client";

import "./globals.css";
import { useEffect } from "react";
import Image from "next/image";
import { StatusCard } from "@/components/shared/status-card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang='en'>
      <body className='flex flex-col justify-center items-center gap-8 bg-background px-4 min-h-screen font-sans text-foreground antialiased brand-glow-bg'>
        <a
          href='/'
          aria-label='POLAS home'
          className='inline-flex items-center'
        >
          <Image
            src='/logo.webp'
            alt=''
            width={40}
            height={40}
            priority
            className='size-8 object-contain'
          />
          <span className='-ml-1 font-black brand-text-gradient text-3xl leading-none tracking-[0.06em]'>
            OLAS
          </span>
        </a>

        <StatusCard
          alert
          title='Something went wrong'
          description='A critical error occurred. Please try reloading the page.'
        >
          {error.digest && (
            <p className='bg-muted mt-4 px-3 py-1.5 rounded-md font-mono text-muted-foreground text-xs'>
              Error ID: {error.digest}
            </p>
          )}

          <button
            type='button'
            onClick={() => reset()}
            className='hover:opacity-90 mt-6 px-5 py-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 font-medium text-brand-foreground text-sm transition-opacity brand-gradient'
          >
            Try again
          </button>
        </StatusCard>
      </body>
    </html>
  );
}
