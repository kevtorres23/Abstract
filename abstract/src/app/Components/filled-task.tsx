import React, { useState } from "react";
import { Calendar, SquarePen, Trash } from "lucide-react";
import MoveTaskBtn from "./move-task-btn";
import Tags from "./default-tag";
import EditableVariant from "./editable-task";

type Tag = {
    name: string,
    color: string,
    id: number,
}

// este objeto describe la estructura de una tarea
interface Task {
    title: string,
    description: string,
    date: string,
    tags: Tag[],
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
    onEditSelected: (index: number) => void;
    onSaveSelected: (task: Task, sectionName: sectionName, index: number) => void;
}

function FilledVariant(props: FilledVariantProps) {

    const [isModifiable, setIsModifiable] = useState(false);

    function handleRemoveTask(index: number) {
        props.onRemoveSelected(index);
    }

    function handleEditTask() {
        setIsModifiable(!isModifiable);
    }

    function handleEditCancel() {
        setIsModifiable(!isModifiable);
    }

    function handleMoveTask(destinySection: sectionName, index: number) {
        const taskData = {
            currentSection: props.currentSection,
            newSection: destinySection,
            index: index,
        }

        props.onMoveSelected(taskData);
    }

    function handleSaveTask(newTask: Task) {
        setIsModifiable(!isModifiable);
        props.onSaveSelected(newTask, props.currentSection, props.index);

    }

    return (
        <>
            {(isModifiable) && (
                <EditableVariant tarea={props.tarea} onModifySelected={true} onCancelSelected={handleEditCancel} onAddSelected={handleSaveTask}/>
            )} {(!isModifiable) && (
                <div className="flex flex-col gap-3">
                    <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                        <div className="etiquetas w-full flex flex-row gap-2">
                            {props.tarea.tags.map((tag, index) => <li className="cursor-pointer" key={index}>
                                <Tags color={tag.color} name={tag.name} id={tag.id}/>
                            </li>)}
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
                                <SquarePen onClick={() => handleEditTask} className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                                <MoveTaskBtn onSectionChange={handleMoveTask} taskIndex={props.index} />
                                <Trash onClick={() => handleRemoveTask(props.index)} className="text-slate-600 dark:text-slate-300 hover:text-main-blue cursor-pointer" size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FilledVariant;