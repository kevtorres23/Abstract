import Image from "next/image";
import { Inter } from '@next/font/google';
import Header from "./Components/header";

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="px-5 flex flex-col pt-7 h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
    </main>
  );
}
