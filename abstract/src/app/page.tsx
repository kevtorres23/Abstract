"use client";
import React, { useState } from "react";
import { Inter } from '@next/font/google';
import Header from "./Components/header";
import TaskSection from "./Components/tasks";

export default function Home() {

  return (
    <main className="sm:px-12 px-5 flex flex-col gap-14 pt-7 sm:pb-20 pb-16 min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Secciones y Tareas */}
      <div className="w-full h-full flex md:flex-row justify-between lg:gap-16 gap-10 flex-col lg:px-24 sm:px-0">
        <TaskSection sectionName="porHacer" />

        <TaskSection sectionName="enProceso" />

        <TaskSection sectionName="terminadas"/>
      </div>
    </main>
  );
}
