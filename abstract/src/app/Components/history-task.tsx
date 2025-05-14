import React from "react";
import Tags from "./default-tag";
import { Calendar } from "lucide-react";

type Tag = {
    name: string,
    color: string,
    id: number,
}


interface Task {
    title: string,
    description: string,
    date: string,
    tags: Tag[],
}

type HistoryVariantProps = {
    taskContent: Task;
}

function HistoryTask(props: HistoryVariantProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                <div className="etiquetas w-full flex flex-row gap-2">
                    {props.taskContent.tags.map((tag, index) => <li className="cursor-pointer" key={index}>
                        <Tags color={tag.color} name={tag.name} id={tag.id} />
                    </li>)}
                </div>

                <div className="contenido w-full flex flex-col gap-1">
                    <h1 className="text-slate-800 dark:text-slate-300 text-md font-bold">{props.taskContent.title}</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">{props.taskContent.description}</p>
                </div>

                <div className="flex lg:flex-row md:flex-col flex-row gap-3 w-full lg:items-center md:items-start items-center justify-between">
                    <div className="fecha-limite px-2 py-1.5 flex flex-row gap-1 bg-slate-200 dark:bg-slate-800 cursor-pointer rounded-sm">
                        <Calendar className="text-slate-600 dark:text-slate-300" size={14} />
                        <p className="text-slate-600 dark:text-slate-300 text-xs font-normal">{props.taskContent.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryTask;