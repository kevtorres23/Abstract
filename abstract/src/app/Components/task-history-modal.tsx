"use client";
import React, { useState } from "react";
import { History, X, Sparkles } from "lucide-react";
import { useTaskList } from "../Functions/TasksProvider";
import HistoryTask from "./history-task";

function TaskHistoryModal() {

    const { tasks } = useTaskList();

    const [modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal);
    }

    return (
        <>
            <button onClick={toggleModal} title="Historial de tareas" className="bg-main-blue p-2 rounded-lg self-center hover:opacity-80 cursor-pointer">
                <History className="text-slate-50" size={20} />
            </button>

            {modal && (
                <div className="modal w-screen h-screen top-0 bottom-0 left-0 right-0 fixed">
                    <div className="overlay w-screen h-screen sm:px-12 px-6 py-6 bg-modal-background flex items-center justify-center">
                        <div className="modal-content flex flex-col bg-slate-50 dark:bg-slate-950 dark:border-2 dark:border-slate-900 rounded-lg max-w-4xl w-full sm:h-auto h-full p-7 gap-5">
                            <div className="flex flex-col gap-1">
                                <div className="upper flex flex-row w-full justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div className="title flex flex-row gap-1.5 items-center">
                                            <History className="text-slate-700 dark:text-slate-300" size={18} strokeWidth={2.5} />
                                            <h1 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Historial de tareas</h1>
                                        </div>
                                    </div>

                                    <button className="close-overlay cursor-pointer" onClick={toggleModal}>
                                        <X className="text-slate-700 hover:text-main-blue dark:text-slate-300" size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <p className="text-[13px] font-normal text-slate-500 dark:text-slate-400">Tareas que has completado o eliminado a lo largo del tiempo.</p>
                            </div>

                            <div className="tasks-container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:max-h-72 h-auto overflow-y-auto">
                                {tasks.map((tarea, index) => <li key={index}>
                                    <HistoryTask taskContent={tarea}
                                    />
                                </li>)}
                            </div>

                            <button className="text-white bg-main-blue text-xs rounded-sm p-2 font-medium self-start flex flex-row gap-2 items-center justify-center">
                                <Sparkles className="text-slate-700 dark:text-slate-300" size={15} strokeWidth={2.5} />
                                <p>Limpiar historial</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TaskHistoryModal;