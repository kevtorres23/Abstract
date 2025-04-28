import React, { useState, useEffect } from "react";
import Tags from "./default-tag";
import { ArrowLeft, Check, Plus, Tag, X } from "lucide-react";
import { useList } from "../Functions/TagListProvider";

// este objeto describe la estructura de una etiqueta
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

type EditableVariantProps = {
    onCancelSelected: () => void;
    onAddSelected: (task: Task) => void;
    onModifySelected?: boolean;
    tarea?: Task,
}

type TagListType = Tag[];

function EditableVariant(props: EditableVariantProps) {

    const { tags } = useList();

    // campos de las tareas
    const [taskTitle, setTaskTitle] = useState(props.tarea?.title);
    const [taskDesc, setTaskDesc] = useState(props.tarea?.description);
    const [taskDate, setTaskDate] = useState(props.tarea?.date);
    const [taskTags, setTaskTags] = useState<TagListType>(props.tarea?.tags || []);
    const [chooseTags, setChooseTags] = useState<TagListType>(tags);
    const [addTagMenu, setAddTagMenu] = useState(false);

    useEffect(() => {
        setChooseTags(tags);
    }, [tags]);

    useEffect(() => {
        tagComparison();
    }, [taskTags, tags]);

    console.log(chooseTags, taskTags);

    function tagComparison() {
        setChooseTags(tags.filter(
            (chooseTag) => !taskTags.some((taskTag) => taskTag.id === chooseTag.id)
        ));
    }

    function handleTitleChange(e: any) {
        setTaskTitle(e.target.value);
    }

    function handleDescChange(e: any) {
        setTaskDesc(e.target.value);
    }

    function handleDateChange(e: any) {
        setTaskDate(e.target.value);
    }

    function handleTagAdditions(tagName: string, tagColor: string, index: number) {
        const newTag: Tag = {
            color: tagColor,
            name: tagName,
            id: index,
        }

        setTaskTags(t => [...t, newTag]);
        setChooseTags(taskTags.filter((_, i) => i !== index));
    }

    function handleTagRemoval(index: number, tagName: string, tagColor: string, tagIndex: number) {
        const newTag: Tag = {
            color: tagColor,
            name: tagName,
            id: tagIndex,
        }

        setTaskTags(taskTags.filter((_, i) => i !== index));
        setChooseTags(t => [...t, newTag]);
    }

    function CancelTaskAddition() {
        props.onCancelSelected();
    }

    function onAddTag() {
        setAddTagMenu(!addTagMenu);
    }

    function CreateTaskObject() {
        const newTask = {
            title: taskTitle || "",
            description: taskDesc || "",
            date: taskDate || "",
            tags: taskTags || [],
        }

        props.onAddSelected(newTask);
    }

    return (
        <>
            <div className="w-full gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
                <div className="contenido w-full flex flex-col gap-5">
                    <div className="px-5 py-6 border-b-1 border-b-slate-300 dark:border-b-slate-700">
                        <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Crear una tarea.</p>
                    </div>

                    <div className="task-required-sections px-5 pb-3 flex flex-col gap-4">
                        <div className="tags flex flex-col gap-2 w-full">
                            <p className="font-medium text-[13px] text-slate-500">Etiquetas</p>
                            <div className="lista-etiquetas flex-wrap flex flex-row gap-3">
                                {taskTags.map((tag, index) => <li className="cursor-pointer" key={index} onClick={() => handleTagRemoval(index, tag.name, tag.color, tag.id)}>
                                    <Tags color={tag.color} name={tag.name} id={index}/>
                                </li>)}
                            </div>
                            <div className="flex flex-row gap-3">
                                <button onClick={onAddTag} className="add-task flex p-1.5 bg-main-blue-15 rounded-sm cursor-pointer"><Plus className="text-main-blue" size={16} /></button>
                                {(addTagMenu) && (
                                    <div className="flex flex-col items-start gap-3 tag-menu p-3 absolute bg-slate-50 mt-8 sm:mr-0 mr-10 border border-slate-300 rounded-lg">
                                        <div className="flex w-full flex-row items-center gap-3">
                                            <p className="text-xs font-medium text-slate-600">Selecciona las etiquetas que quieres añadir.</p>
                                            <X onClick={onAddTag} className="text-slate-600 cursor-pointer" size={12} />
                                        </div>
                                        {chooseTags.map((tag, index) => <li className="cursor-pointer" key={index} onClick={() => handleTagAdditions(tag.name, tag.color, tag.id)}>
                                            <Tags color={tag.color} name={tag.name} id={tag.id}/>
                                        </li>)}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-[13px] text-slate-500">Título</p>
                            <input type="text" value={taskTitle} onChange={handleTitleChange} className="w-full bg-gray-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 rounded-md py-2 px-3 text-[13px] text-slate-800 dark:text-slate-100" placeholder="Tarea número 1"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-[13px] text-slate-500">Descripción</p>
                            <input type="text" value={props.tarea?.description} onChange={handleDescChange} className="w-full bg-gray-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 rounded-md py-2 px-3 text-[13px] text-slate-800 dark:text-slate-100" placeholder="Descripción de la tarea número 2"></input>
                        </div>

                        <div className="flex flex-col gap-2 self-start">
                            <p className="font-medium text-[13px] text-slate-500">Fecha límite</p>
                            <input type="date" onChange={handleDateChange} value={props.tarea?.date} id="date-picker" className="text-slate-800 dark:text-slate-300 text-[13px] font-normal px-2 py-1.5 flex flex-row gap-1 bg-gray-200 dark:bg-slate-800 cursor-pointer rounded-sm"></input>
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
        </>
    )
}

export default EditableVariant;