import Image from "next/image";
import { Inter } from '@next/font/google';
import ThemeToggler from "./Components/theme-toggler";

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-100 dark:bg-slate-950">
      <ThemeToggler/>
    </main>
  );
}
