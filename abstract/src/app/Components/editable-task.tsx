import React, { useState, useContext } from "react";
import TagList from "./tag-list";
import { ArrowLeft, Check, Plus, Tag } from "lucide-react";

// este objeto describe la estructura de una tarea
interface Task {
    title: string,
    description: string,
    date: string
}

type EditableVariantProps = {
    onCancelSelected: () => void;
    onAddSelected: (task: Task) => void;
}

function EditableVariant(props: EditableVariantProps) {

    // campos de las tareas
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [addTagMenu, setAddTagMenu] = useState(false);

    function handleTitleChange(e: any) {
        setTaskTitle(e.target.value);
    }

    function handleDescChange(e: any) {
        setTaskDesc(e.target.value);
    }

    function handleDateChange(e: any) {
        setTaskDate(e.target.value);
    }

    function CancelTaskAddition() {
        props.onCancelSelected();
    }

    function onAddTag() {
        setAddTagMenu(!addTagMenu);
    }

    function CreateTaskObject() {
        const newTask = {
            title: taskTitle,
            description: taskDesc,
            date: taskDate,
        }

        props.onAddSelected(newTask);
    }

    return (
        <div className="w-full gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
            <div className="contenido w-full flex flex-col gap-5">
                <div className="px-5 py-6 border-b-1 border-b-slate-300 dark:border-b-slate-700">
                    <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Crear una tarea.</p>
                </div>

                <div className="sections px-5 pb-3 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-[13px] text-slate-500">Etiquetas</p>
                        <div className="flex flex-row gap-3">
                            <button onClick={onAddTag} className="add-task flex p-1.5 bg-main-blue-15 rounded-sm cursor-pointer"><Plus className="text-main-blue" size={16} /></button>
                            {(addTagMenu) && (
                                <div className="flex flex-col items-start gap-3 tag-menu p-3 absolute bg-slate-50 mt-8 border border-slate-300 rounded-lg">
                                    <p className="text-xs font-medium text-slate-600">Selecciona las etiquetas que quieres añadir.</p>
                                    <TagList/>
                                </div>
                            )}
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
                    <button onClick={CancelTaskAddition} className="flex gap-1 w-full items-center justify-center flex-row py-2 cursor-pointer rounded-md bg-transparent border border-main-blue hover:bg-main-blue-15 transition duration-200">
                        <ArrowLeft className="text-main-blue cursor-pointer" size={16} />
                        <p className="text-main-blue text-xs">Cancelar</p>
                    </button>
                    <button onClick={CreateTaskObject} className="flex gap-1 w-full items-center justify-center flex-row py-2 cursor-pointer rounded-md bg-main-blue">
                        <Check className="text-white cursor-pointer" size={16} />
                        <p className="text-white text-xs">Crear tarea</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditableVariant;