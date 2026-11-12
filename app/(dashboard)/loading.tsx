import { cn } from "@/lib/utils";

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={cn("bg-muted motion-safe:animate-pulse", className)}
      aria-hidden
    />
  );
}

export default function Loading() {
  return (
    <div
      role='status'
      aria-busy='true'
      aria-live='polite'
      className='mx-auto px-4 py-16 max-w-6xl brand-glow-bg'
    >
      <span className='sr-only'>Loading…</span>

      {/* Hero */}
      <div className='items-center gap-10 grid md:grid-cols-2'>
        <div className='space-y-4'>
          <Bone className='rounded-full w-32 h-4' />
          <Bone className='rounded-lg w-full max-w-md h-12' />
          <Bone className='rounded-lg w-2/3 h-12' />
          <Bone className='rounded w-full max-w-sm h-4' />
          <Bone className='rounded w-4/5 max-w-sm h-4' />
          <div className='flex gap-3 pt-2'>
            <Bone className='bg-brand/20 rounded-lg w-32 h-10' />
            <Bone className='rounded-lg w-28 h-10' />
          </div>
        </div>
        <Bone className='mx-auto rounded-full size-64 md:size-80' />
      </div>

      {/* Cards */}
      <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-16'>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className='space-y-3 p-5 glass'>
            <Bone className='rounded-lg h-36' />
            <Bone className='rounded w-3/4 h-5' />
            <Bone className='rounded w-full h-4' />
          </div>
        ))}
      </div>
    </div>
  );
}
