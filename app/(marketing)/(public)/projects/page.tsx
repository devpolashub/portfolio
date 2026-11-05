import ProjectSection from "@/components/sections/projects/projects";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata.projects;

export default function page() {
  return <ProjectSection />;
}
