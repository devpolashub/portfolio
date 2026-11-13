"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCw } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StatusPage } from "@/components/shared/status-page";
import { StatusCard } from "@/components/shared/status-card";

export default function Error({
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
    <StatusPage>
      <StatusCard
        alert
        icon={<AlertTriangle className='size-7' aria-hidden />}
        title='Something went wrong'
        description='An unexpected error occurred while loading this page. You can try again or head back home.'
      >
        {error.digest && (
          <p className='bg-muted mt-4 px-3 py-1.5 rounded-md font-mono text-muted-foreground text-xs'>
            Error ID: {error.digest}
          </p>
        )}

        <div className='flex sm:flex-row flex-col sm:justify-center gap-3 mt-6'>
          <button
            type='button'
            onClick={() => reset()}
            className={cn(
              buttonVariants(),
              "brand-gradient border-0 text-brand-foreground",
            )}
          >
            <RotateCw className='size-4' aria-hidden />
            Try again
          </button>
          <Link href='/' className={buttonVariants({ variant: "outline" })}>
            <Home className='size-4' aria-hidden />
            Go home
          </Link>
        </div>
      </StatusCard>
    </StatusPage>
  );
}
