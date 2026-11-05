import { CheckCircle2, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export type EducationStatus = "completed" | "certified" | "in-progress";

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "border-brand-nature/20 bg-brand-nature/10 text-brand-nature",
  },
  certified: {
    label: "Certified",
    icon: CheckCircle2,
    className: "border-brand/20 bg-brand/10 text-brand",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock3,
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
} satisfies Record<
  EducationStatus,
  {
    label: string;
    icon: typeof CheckCircle2;
    className: string;
  }
>;

export function getBadge(status: EducationStatus) {
  const config = statusConfig[status];

  const Icon = config.icon;

  return (
    <Badge
      variant='outline'
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ${config.className}`}
    >
      <Icon aria-hidden='true' className='size-3.5' />
      {config.label}
    </Badge>
  );
}
