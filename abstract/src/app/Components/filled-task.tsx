import React from "react";
import { Calendar, SquarePen, Trash } from "lucide-react";
import MoveTaskBtn from "./move-task-btn";

// este objeto describe la estructura de una tarea
interface Task {
    title: string,
    description: string,
    date: string
}

type sectionName = "porHacer" | "enProceso" | "terminadas";

type movementData = {
    currentSection: sectionName,
    newSection: sectionName,
    index: number,
}

type FilledVariantProps = {
    currentSection: sectionName;
    tarea: Task,
    index: number,
    onRemoveSelected: (index: number) => void;
    onMoveSelected: (taskData: movementData) => void;
}

function FilledVariant(props: FilledVariantProps) {
    
    function handleRemoveTask(index: number ) {
        props.onRemoveSelected(index);
    }

    function handleMoveTask(destinySection: sectionName, index: number) {
        const taskData = {
            currentSection: props.currentSection,
            newSection: destinySection,
            index: index,
        }

        props.onMoveSelected(taskData);
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                <div className="etiquetas w-full flex flex-row gap-2">

                </div>

                <div className="contenido w-full flex flex-col gap-1">
                    <h1 className="text-slate-800 dark:text-slate-300 text-md font-bold">{props.tarea.title}</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">{props.tarea.description}</p>
                </div>

                <div className="flex lg:flex-row md:flex-col flex-row gap-3 w-full lg:items-center md:items-start items-center justify-between">
                    <div className="fecha-limite px-2 py-1.5 flex flex-row gap-1 bg-slate-200 dark:bg-slate-800 cursor-pointer rounded-sm">
                        <Calendar className="text-slate-600 dark:text-slate-300" size={14} />
                        <p className="text-slate-600 dark:text-slate-300 text-xs font-normal">{props.tarea.date}</p>
                    </div>

                    <div className="acciones flex flex-row gap-2">
                        <SquarePen className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                        <MoveTaskBtn onSectionChange={handleMoveTask} taskIndex={props.index} />
                        <Trash onClick={() => handleRemoveTask(props.index)} className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilledVariant;