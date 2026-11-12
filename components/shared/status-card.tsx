import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  eyebrow?: ReactNode;
  alert?: boolean;
  className?: string;
  children?: ReactNode;
}

export function StatusCard({
  title,
  description,
  icon,
  eyebrow,
  alert,
  className,
  children,
}: StatusCardProps) {
  return (
    <div
      role={alert ? "alert" : undefined}
      className={cn(
        "mx-auto p-6 sm:p-8 w-full max-w-lg text-center glass",
        className,
      )}
    >
      {icon && (
        <div className='flex justify-center items-center bg-destructive/10 mx-auto mb-6 rounded-full size-14 text-destructive'>
          {icon}
        </div>
      )}

      {eyebrow}

      <h1 className='mt-2 font-bold text-2xl sm:text-3xl tracking-tight'>
        {title}
      </h1>

      <p className='mx-auto mt-3 max-w-md text-muted-foreground text-sm sm:text-base leading-7'>
        {description}
      </p>

      {children}
    </div>
  );
}
