import Image from "next/image";
import { Inter } from '@next/font/google';
import Header from "./Components/header";
import SectionName from "./Components/section-name";
import TaskCard from "./Components/task-card";
import PlaceholderTask from "./Components/placeholder-task-card";

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="sm:px-12 px-5 flex flex-col gap-14 pt-7 pb-20 md:h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Secciones y Tareas */}
      <div className="w-full flex md:flex-row justify-between lg:gap-16 gap-10 flex-col lg:px-24 sm:px-0 h-auto">
        <div className="w-full flex flex-col gap-5" id="por-hacer">
          <SectionName name="Por hacer" taskCounter={1}/>
          <PlaceholderTask type="porHacer"/>
        </div>

        <div className="w-full flex flex-col gap-5" id="en-proceso">
          <SectionName name="En proceso" taskCounter={1}/>
          <PlaceholderTask type="enProceso"/>
        </div>
        <div className="w-full flex flex-col gap-5" id="terminadas">
          <SectionName name="Terminadas" taskCounter={1}/>
          <PlaceholderTask type="terminadas"/>
        </div>
        
      </div>
    </main>
  );
}
