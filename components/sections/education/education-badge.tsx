import { CheckCircle2, Clock3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const getBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <Badge variant="secondary">
          <CheckCircle2 className="mr-1 h-3.5 w-3.5 text-emerald-500" />
          Completed
        </Badge>
      )

    case "certified":
      return (
        <Badge variant={"secondary"}>
          <CheckCircle2 className="mr-1 h-3.5 w-3.5 text-emerald-500" />
          Certified
        </Badge>
      )

    case "in-progress":
      return (
        <Badge className="bg-yellow-700" variant={"secondary"}>
          <Clock3 className="mr-1 h-3.5 w-3.5" />
          In Progress
        </Badge>
      )

    default:
      return null
  }
}
