import About from "@/components/sections/about/about";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata.about;

export default function page() {
  return <About />;
}
