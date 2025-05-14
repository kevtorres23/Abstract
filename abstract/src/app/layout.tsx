import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Functions/ThemeProvider";
import { TagListProvider } from "./Functions/TagListProvider";
import { TaskListProvider } from "./Functions/TasksProvider";

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
            <TaskListProvider>
              {children}
            </TaskListProvider>
          </TagListProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
