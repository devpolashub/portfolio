import { CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ProjectStatus = "completed" | "in-progress" | string;

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

export function getStatusBadge(status: ProjectStatus) {
  switch (status) {
    case "completed":
      return (
        <Badge
          variant='secondary'
          className='gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
        >
          <CheckCircle2 className='size-3.5' />
          Completed
        </Badge>
      );

    case "in-progress":
      return (
        <Badge
          variant='secondary'
          className='gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400'
        >
          <Clock3 className='size-3.5' />
          In progress
        </Badge>
      );

    default:
      return null;
  }
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return getStatusBadge(status);
}
