import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ResumeButton() {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button
        variant='outline'
        className='group overflow-hidden font-semibold text-sm lg:text-lg'
      >
        <Link href='/resume.pdf' download className='flex items-center gap-2'>
          <Download className='group-active:rotate-0 group-hover:rotate-12 transition-transform group-active:translate-y-0 group-hover:-translate-y-1 duration-300' />

          <span className='relative'>
            <span className='text-sm md:text-base transition-all group-hover:translate-x-1 duration-300'>
              Resume
            </span>

            <span className='-bottom-0.5 left-0 absolute bg-ring w-0 group-hover:w-full h-0.5 transition-all duration-300' />
          </span>
        </Link>
      </Button>
    </motion.div>
  );
}
