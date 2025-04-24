"use client";
import React, { useState } from "react";
import { Inter } from '@next/font/google';
import Header from "./Components/header";
import TaskWrapper from "./Components/task-wrapper";

export default function Home() {

  return (
    <main className="sm:px-12 px-5 flex flex-col gap-14 pt-7 sm:pb-20 pb-16 min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Secciones y Tareas */}
      <TaskWrapper/>
    </main>
  );
}
