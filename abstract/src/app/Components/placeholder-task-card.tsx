import { ArrowDownWideNarrow, NotebookPen, BookCheck, Book, Plus } from "lucide-react"
import React from "react";

type TaskType = 'porHacer' | 'enProceso' | 'terminadas';

const descriptionVariants: Record<TaskType, string> = { //TaskType: porHacer, enProceso, terminadas || string: "Añade o mueve..."
    porHacer: "Añade o mueve a esta sección las tareas en las que aún no has empezado a trabajar aún.",
    enProceso: "Añade o mueve a esta sección las tareas en las que te encuentras trabajando actualmente.",
    terminadas: "Añade o mueve a esta sección las tareas que ya fueron completadas o entregadas."
};

const iconVariants: Record<TaskType, React.ReactNode> = {
    porHacer: <ArrowDownWideNarrow className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
    enProceso: <NotebookPen className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
    terminadas: <BookCheck className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
};

type placeholderTaskProps = {
    type: TaskType;
}

function PlaceholderTask(props: placeholderTaskProps) {
    return (
        <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
            <div className="contenido w-full flex flex-col gap-5">
                <div className="p-2 rounded-lg bg-main-blue-15 self-start">{iconVariants[props.type]}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">{descriptionVariants[props.type]}</p>
                <div className="flex gap-3 items-center justify-center flex-row py-2.5 cursor-pointer rounded-lg bg-main-blue">
                    <Plus className="text-white cursor-pointer" size={16} />
                    <p className="text-white text-xs">Agregar una tarea</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceholderTask;