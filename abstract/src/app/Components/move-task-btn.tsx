'use client';
import React, { useState } from 'react';
import { ArrowLeftRight, NotebookPen, BookCheck } from 'lucide-react';

type btnProps = {
    onSectionChange: (newSection: TaskSection, index: number) => void;
    taskIndex: number;
};

type TaskSection = "porHacer" | "enProceso" | "terminadas";

function MoveTaskBtn(props: btnProps) {
    const [sectionName, setSectionName] = useState("");
    const [sectionMenu, setSectionMenu] = useState(false);

    function sendToPorHacer() {
        const name1 = "porHacer";
        setSectionName(name1);
        props.onSectionChange(name1, props.taskIndex);
    }

    function sendToEnProceso() {
        const name2 = "enProceso";
        setSectionName(name2);
        props.onSectionChange(name2, props.taskIndex);
    }

    function sendToTerminadas() {
        const name3 = "terminadas";
        setSectionName(name3);
        props.onSectionChange(name3, props.taskIndex);
    }

    function handleMoveTask() {
        setSectionMenu(!sectionMenu);
    }

    return (
        <div className=' flex flex-col gap-1 items-center'>
            <ArrowLeftRight onClick={handleMoveTask} className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
            {sectionMenu && (
                <div className='flex flex-col absolute mt-7 bg-slate-50 dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800'>
                    <div onClick={sendToPorHacer} className='px-2 py-3 items-center justify-center flex flex-row gap-1.5 pb-2 border-b-2 border-b-slate-200 dark:border-b-slate-800 hover:bg-slate-200 cursor-pointer'>
                        <ArrowLeftRight className="text-slate-700 dark:text-slate-300" size={14} />
                        <p className='text-xs text-slate-700 dark:text-slate-300 font-medium'>Por hacer</p>
                    </div>
                    <div onClick={sendToEnProceso} className='px-2 py-3 items-center justify-center flex flex-row gap-1 pb-2 border-b-2 border-b-slate-200 dark:border-b-slate-800 hover:bg-slate-200 cursor-pointer'>
                        <NotebookPen className="text-slate-700 dark:text-slate-300" size={14} />
                        <p className='text-xs text-slate-700 dark:text-slate-300 font-medium'>En proceso</p>
                    </div>
                    <div onClick={sendToTerminadas} className='px-2 py-3 items-center justify-center flex flex-row gap-1 pb-2 hover:bg-slate-200 cursor-pointer'>
                        <BookCheck className="text-slate-700 dark:text-slate-300" size={14} />
                        <p className='text-xs text-slate-700 dark:text-slate-300 font-medium'>Terminadas</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoveTaskBtn;