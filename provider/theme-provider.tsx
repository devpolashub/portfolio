import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NextThemeProvider
      attribute='class'
      defaultTheme='system' // follows OS/browser preference
      enableSystem
      storageKey='theme' // persists user theme choice
      enableColorScheme={false} // syncs color-scheme meta
    >
      {children}
    </NextThemeProvider>
  );
}
