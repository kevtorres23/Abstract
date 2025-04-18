import Image from "next/image";
import { Inter } from '@next/font/google';
import Header from "./Components/header";
import SectionName from "./Components/section-name";
import TaskCard from "./Components/task-card";

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="sm:px-12 px-5 flex flex-col gap-14 pt-7 md:h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Secciones y Tareas */}
      <div className="w-full flex md:flex-row justify-between lg:gap-16 gap-6 flex-col lg:px-24 sm:px-0 h-auto">
        <div className="w-full flex flex-col gap-5">
          <SectionName name="Por hacer" taskCounter={1}/>
          <TaskCard title="Tarea 1" description="Este es el contenido de prueba de la tarea 1."/>
        </div>
        <div className="w-full flex flex-col gap-5">
          <SectionName name="En proceso" taskCounter={1}/>
          <TaskCard title="Tarea 1" description="Este es el contenido de prueba de la tarea 1."/>
        </div>
        <div className="w-full flex flex-col gap-5">
          <SectionName name="Terminadas" taskCounter={1}/>
          <TaskCard title="Tarea 1" description="Este es el contenido de prueba de la tarea 1."/>
        </div>
      </div>


    </main>
  );
}
