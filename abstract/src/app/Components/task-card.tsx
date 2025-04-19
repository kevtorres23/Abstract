import { Calendar, SquarePen, ArrowLeftRight, Trash } from "lucide-react";

import Tags from "./tags";

type taskProps = {
    title: string,
    description: string
}

function TaskCard(props: taskProps) {
    return(
        <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
            <div className="etiquetas w-full flex flex-row gap-2">
                
            </div>

            <div className="contenido w-full flex flex-col gap-1">
                <h1 className="text-slate-800 dark:text-slate-300 text-md font-bold">{props.title}</h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">{props.description}</p>
            </div>

            <div className="flex lg:flex-row md:flex-col flex-row gap-3 w-full lg:items-center md:items-start items-center justify-between">
                <div className="fecha-limite px-2 py-1.5 flex flex-row gap-1 bg-slate-200 dark:bg-slate-800 cursor-pointer rounded-sm">
                    <Calendar className="text-slate-600 dark:text-slate-300" size={14}/>
                    <p className="text-slate-600 dark:text-slate-300 text-xs font-normal">8 de mayo del 2025</p>
                </div>

                <div className="acciones flex flex-row gap-2">
                    <SquarePen className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16}/>
                    <ArrowLeftRight className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16}/>
                    <Trash className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16}/>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;