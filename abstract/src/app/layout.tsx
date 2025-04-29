import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Functions/ThemeProvider";
import { TagListProvider } from "./Functions/TagListProvider";

export const metadata: Metadata = {
  title: "Abstract",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <TagListProvider>
            {children}
          </TagListProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
