"use client";

import { SidebarIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { SearchForm } from "./search-form";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className='top-0 z-50 sticky flex items-center bg-background border-b w-full'>
      <div className='flex h-(--header-height) w-full items-center gap-2 px-4'>
        <Button
          className='w-8 h-8'
          variant='ghost'
          size='icon'
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb className='hidden sm:block'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>@devpolas</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className='sm:ml-auto w-full sm:w-auto' />
      </div>
    </header>
  );
}
