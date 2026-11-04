"use client";
import { ArrowRight, Download } from "lucide-react";
import ResumeButton from "@/components/buttons/resume-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroCTA() {
  const isMobile = useIsMobile();
  return (
    <div className='flex flex-wrap gap-4'>
      {isMobile ? (
        <ResumeButton />
      ) : (
        <Button
          variant={"secondary"}
          size={isMobile ? "sm" : "lg"}
          className='hover:scale-105 transition-all duration-300 hover:cursor-pointer'
        >
          <Link download href='/resume.pdf'>
            <Download className='mr-2 w-4 h-4' />
            Download Resume
          </Link>
        </Button>
      )}

      <Button
        variant='outline'
        size={isMobile ? "sm" : "lg"}
        className='group hover:scale-105 transition-all duration-300 cursor-pointer'
      >
        <Link href='#projects'>
          View Projects
          <ArrowRight className='ml-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-300' />
        </Link>
      </Button>
    </div>
  );
}
