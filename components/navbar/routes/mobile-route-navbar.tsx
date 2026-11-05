"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mainNavigation, navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { isRouteActive } from "./route-utils";

export default function RouteMobileNavbar({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='lg:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type='button'
              variant='outline'
              size='icon'
              aria-label='Open navigation menu'
              className={cn(
                "border-brand/20 size-9",
                "hover:bg-brand/10 hover:text-brand",
              )}
            >
              <Menu aria-hidden='true' className='size-5' />
            </Button>
          }
        />

        <DropdownMenuContent
          align='end'
          sideOffset={isScrolled ? 10 : 13}
          className={cn(
            "p-2 border-brand/15 w-56",
            "bg-background/95 shadow-xl backdrop-blur-xl",
          )}
        >
          <div className='px-2 py-2'>
            <p className='font-semibold text-muted-foreground text-xs uppercase tracking-[0.16em]'>
              Explore
            </p>
          </div>

          {mainNavigation.map((item) => {
            const active = isRouteActive(pathname, item.href);

            return (
              <DropdownMenuItem
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "flex justify-between items-center px-3 rounded-lg min-h-10 text-base cursor-pointer",
                  active
                    ? "bg-brand/10 font-medium text-brand"
                    : "text-foreground",
                )}
              >
                <span>{item.label}</span>

                {active && (
                  <span
                    aria-hidden='true'
                    className='bg-brand rounded-full size-1.5'
                  />
                )}
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator className='my-2' />

          <DropdownMenuItem
            onClick={() => router.push(navigationConfig.cta.href)}
            className={cn(
              "flex justify-between items-center rounded-lg min-h-10 text-base cursor-pointer",
              "font-medium text-brand focus:bg-brand/10 focus:text-brand",
            )}
          >
            {navigationConfig.cta.label}
            <ArrowUpRight aria-hidden='true' className='size-4' />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
