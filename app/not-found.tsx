import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StatusPage } from "@/components/shared/status-page";
import { StatusCard } from "@/components/shared/status-card";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <StatusPage>
      <StatusCard
        eyebrow={
          <p className='font-bold brand-text-gradient text-7xl tracking-tight'>
            404
          </p>
        }
        title='Page not found'
        description="The page you're looking for doesn't exist or may have been moved."
      >
        <Link
          href='/'
          className={cn(
            buttonVariants(),
            "brand-gradient mt-6 border-0 text-brand-foreground",
          )}
        >
          <Home className='size-4' aria-hidden />
          Return home
        </Link>
      </StatusCard>
    </StatusPage>
  );
}
