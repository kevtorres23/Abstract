"use client";
import React, { useState } from "react";
import { Inter } from '@next/font/google';
import Header from "./Components/header";
import SeccionPorHacer from "./Components/por-hacer";
import SeccionEnProceso from "./Components/en-proceso";
import SeccionTerminadas from "./Components/terminadas";

export default function Home() {

  return (
    <main className="sm:px-12 px-5 flex flex-col gap-14 pt-7 sm:pb-20 pb-16 min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Secciones y Tareas */}
      <div className="w-full h-full flex md:flex-row justify-between lg:gap-16 gap-10 flex-col lg:px-24 sm:px-0">
        <SeccionPorHacer />

        <SeccionEnProceso />

        <SeccionTerminadas />
      </div>
    </main>
  );
}
