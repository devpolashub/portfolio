import { ReactNode } from "react";
import { TooltipProvider } from "../components/ui/tooltip";
import ThemeProvider from "./theme-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <TooltipProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </TooltipProvider>
    </SmoothScrollProvider>
  );
}
