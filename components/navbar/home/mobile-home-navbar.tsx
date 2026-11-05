"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { mainHomeNavigation, navigationConfig } from "@/config/navigation";
import useActiveSectionId from "@/hooks/use-active-section";

export default function HomeMobileNavbar({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const activeId = useActiveSectionId();
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

          {mainHomeNavigation.map((item) => {
            const isActive = activeId === item.href.replace("/#", "");

            return (
              <DropdownMenuItem
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "flex justify-between items-center px-3 rounded-lg min-h-10 text-base cursor-pointer",
                  isActive
                    ? "bg-brand/10 font-medium text-brand"
                    : "text-foreground",
                )}
              >
                <span>{item.label}</span>

                {isActive && (
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
            onClick={() => router.push(navigationConfig.homeCta.href)}
            className={cn(
              "flex justify-between items-center rounded-lg min-h-10 text-base cursor-pointer",
              "font-medium text-brand focus:bg-brand/10 focus:text-brand",
            )}
          >
            {navigationConfig.homeCta.label}
            <ArrowUpRight aria-hidden='true' className='size-4' />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
