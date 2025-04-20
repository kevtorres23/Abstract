
import React, { useState } from "react";
import SectionName from "./section-name";
import { ArrowDownWideNarrow, Plus, Check, ArrowLeft } from "lucide-react"
import { Calendar, SquarePen, ArrowLeftRight, Trash } from "lucide-react";
import Tags from "./tags";

interface Task {
    title: string,
    description: string,
    date: string
}

function SeccionPorHacer() {
    const [taskStatus, setTaskStatus] = useState("default");

    // campos de las tareas
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskDate, setTaskDate] = useState("");

    // listas de tareas
    const [lista, setLista] = useState<Task[]>([]);

    function handleTitleChange(e: any) {
        setTaskTitle(e.target.value);
    }

    function handleDescChange(e: any) {
        setTaskDesc(e.target.value);
    }

    function handleDateChange(e: any) {
        setTaskDate(e.target.value);
    }

    function editableTask() {
        setTaskStatus("editable");
    }

    function defaultTask() {
        setTaskStatus("default");
    }

    function handleAddTask() {
        setTaskStatus("filled");
        const newTask = {
            title: taskTitle,
            description: taskDesc,
            date: taskDate
        };

        setLista(l => [...l, newTask]);
    }

    function handleRemoveTask(index: any) {
        setLista(lista.filter((_, i) => i !== index));
        setTaskStatus("default");
    }

    if (lista.length === 0 && taskStatus === "default") {
        return (
            <div className="w-full flex flex-col gap-5">
                <SectionName name="Por hacer" taskCounter={1} />
                <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                    <div className="contenido w-full flex flex-col gap-5">
                        <div className="p-2 rounded-lg bg-main-blue-15 self-start"><ArrowDownWideNarrow className="text-main-blue hover:text-main-blue cursor-pointer" size={20} /></div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">Añade o mueve a esta sección las tareas en las que aún no has empezado a trabajar aún.</p>
                        <button onClick={editableTask} className="flex gap-3 md:self-auto sm:self-start self-auto lg:px-5 md:px-2 px-5 items-center justify-center flex-row py-2.5 cursor-pointer rounded-md bg-main-blue">
                            <Plus className="text-white cursor-pointer" size={16} />
                            <p className="text-white text-xs">Agregar una tarea</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    } else if (taskStatus === "editable") {
        return (
            <div className="w-full flex flex-col gap-5">
                <SectionName name="Por hacer" taskCounter={1} />
                <div className="w-full gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                    <div className="contenido w-full flex flex-col gap-5">
                        <div className="px-5 py-6 border-b-1 border-b-slate-300 dark:border-b-slate-700">
                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Crear una tarea.</p>
                        </div>

                        <div className="sections px-5 pb-3 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-[13px] text-slate-500">Etiquetas</p>
                                <div className="flex flex-row gap-3">
                                    <Tags name="Etiqueta 1" />
                                    <Tags name="Etiqueta 2" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-[13px] text-slate-500">Título</p>
                                <input type="text" onChange={handleTitleChange} className="w-full bg-gray-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 rounded-md py-2 px-3 text-[13px] text-slate-800 dark:text-slate-100" placeholder="Tarea número 1"></input>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-[13px] text-slate-500">Descripción</p>
                                <input type="text" onChange={handleDescChange} className="w-full bg-gray-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 rounded-md py-2 px-3 text-[13px] text-slate-800 dark:text-slate-100" placeholder="Descripción de la tarea número 2"></input>
                            </div>

                            <div className="flex flex-col gap-2 self-start">
                                <p className="font-medium text-[13px] text-slate-500">Fecha límite</p>
                                <input onChange={handleDateChange} type="date" id="date-picker" className="text-slate-800 dark:text-slate-300 text-[13px] font-normal px-2 py-1.5 flex flex-row gap-1 bg-gray-200 dark:bg-slate-800 cursor-pointer rounded-sm"></input>
                            </div>
                        </div>

                        <div className="px-5 pb-6 flex flex-row gap-3">
                            <button onClick={defaultTask} className="flex gap-1 w-full items-center justify-center flex-row py-2 cursor-pointer rounded-md bg-transparent border border-main-blue hover:bg-main-blue-15 transition duration-200">
                                <ArrowLeft className="text-main-blue cursor-pointer" size={16} />
                                <p className="text-main-blue text-xs">Cancelar</p>
                            </button>
                            <button onClick={handleAddTask} className="flex gap-1 w-full items-center justify-center flex-row py-2 cursor-pointer rounded-md bg-main-blue">
                                <Check className="text-white cursor-pointer" size={16} />
                                <p className="text-white text-xs">Crear tarea</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (lista.length >= 1) {
        return (
            <div className="w-full flex flex-col gap-5">
                <SectionName name="Por hacer" taskCounter={1} />
                {lista.map((tarea, index) => <li key={index}>
                    <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                        <div className="etiquetas w-full flex flex-row gap-2">

                        </div>

                        <div className="contenido w-full flex flex-col gap-1">
                            <h1 className="text-slate-800 dark:text-slate-300 text-md font-bold">{tarea.title}</h1>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">{tarea.description}</p>
                        </div>

                        <div className="flex lg:flex-row md:flex-col flex-row gap-3 w-full lg:items-center md:items-start items-center justify-between">
                            <div className="fecha-limite px-2 py-1.5 flex flex-row gap-1 bg-slate-200 dark:bg-slate-800 cursor-pointer rounded-sm">
                                <Calendar className="text-slate-600 dark:text-slate-300" size={14} />
                                <p className="text-slate-600 dark:text-slate-300 text-xs font-normal">{tarea.date}</p>
                            </div>

                            <div className="acciones flex flex-row gap-2">
                                <SquarePen className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                                <ArrowLeftRight className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                                <Trash onClick={() => handleRemoveTask(index)} className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                            </div>
                        </div>
                    </div>
                </li>)}
            </div>
        )
    }
}

export default SeccionPorHacer;