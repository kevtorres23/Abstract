'use client';
import { ChevronUp, Plus } from 'lucide-react';
import React, { useState } from 'react';

type sectionProps = {
    name: React.ReactNode,
    taskCounter: number,
    onAddTask?: (addTask: boolean) => void
};

function SectionName(props: sectionProps) {
    const [addTask, setAddTask] = useState(false);

    function addTaskClicked() {
        setAddTask(true);
        if (props.onAddTask) {
            props.onAddTask(addTask);
        }
    }

    return(
        <div className="w-full flex bg-slate-100 justify-between dark:bg-gray-between-dark p-3 rounded-lg">
            <div className="flex flex-row gap-2 items-center">
                <p className="text-slate-700 tracking-tight dark:text-slate-300 font-semibold text-base">{props.name}</p>
                <p className="text-slate-500 tracking-tight font-medium text-xs">({props.taskCounter})</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <ChevronUp className="text-slate-700 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={20}/>
                <Plus onClick={addTaskClicked} className="text-slate-700 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={20}/>
            </div>
        </div>
    )
}

export default SectionName;