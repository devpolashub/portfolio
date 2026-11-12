import { CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const config = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "border-brand-nature/25 bg-brand-nature/10 text-brand-nature",
  },
  certified: {
    label: "Certified",
    icon: CheckCircle2,
    className: "border-brand/25 bg-brand/10 text-brand",
  },
  "in-progress": {
    label: "In progress",
    icon: Clock3,
    className:
      "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
} as const;

export type Status = keyof typeof config;

export function StatusBadge({
  status,
  overlay = false,
}: {
  status: Status;
  overlay?: boolean; // use on top of images
}) {
  const c = config[status];
  if (!c) return null;
  const Icon = c.icon;
  return (
    <Badge
      variant='outline'
      className={cn(
        "gap-1.5 px-2.5 py-1 rounded-full font-medium",
        c.className,
        overlay && "bg-background/85 backdrop-blur-sm",
      )}
    >
      <Icon aria-hidden className='size-3.5' />
      {c.label}
    </Badge>
  );
}
