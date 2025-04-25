import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

type EditableVariantProps = {
    onCancelSelected: () => void;
    onAddSelected: (tagName: string, tagColor: string) => void;
}

function EditableTag(props: EditableVariantProps) {

    const [tagName, setTagName] = useState("");
    const [tagColor, setTagColor] = useState("#FFFFFF");

    function handleNameChange(e: any) {
        setTagName(e.target.value);
    }

    function handleColorChange(e: any) {
        setTagColor(e.target.value);
    }

    function CancelTaskAddition() {
        props.onCancelSelected();
    }

    function CreateTagObject() {
        props.onAddSelected(tagName, tagColor);
    }

    return (
        <div className="flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
            <div className="px-4 py-3 border-b border-b-slate-300 dark:border-b-slate-700">
                <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Crear una etiqueta.</p>
            </div>

            <div className="flex flex-col gap-3 px-4 py-3">
                <div className="nombre-input flex flex-row gap-2 items-center">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-500">Nombre</p>
                    <input type="text" onChange={handleNameChange} placeholder="Proyecto final" className="w-full bg-slate-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-slate-700 rounded-md py-1.5 px-3 text-xs text-slate-800 dark:text-slate-100" />
                </div>

                <div className="nombre-input flex flex-row gap-2 items-center">
                    <p className="text-xs font-medium text-slate-500">Color</p>
                    <input type="color" onChange={handleColorChange} value={tagColor} className="border border-slate-300 dark:border-slate-700 max-w-16 w-full py-0.5 px-1 max-h-8 bg-slate-200 dark:bg-slate-800 rounded-md"/>
                </div>

            </div>

            <div className="flex flex-row gap-3 px-3 pb-3">
                <button onClick={CancelTaskAddition} className="flex gap-1 w-full items-center justify-center flex-row py-1.5 cursor-pointer rounded-md bg-transparent border border-main-blue hover:bg-main-blue-15 transition duration-200">
                    <ArrowLeft className="text-main-blue cursor-pointer" size={14} />
                    <p className="text-main-blue text-[11px]">Cancelar</p>
                </button>
                <button onClick={CreateTagObject} className="flex gap-1 w-full items-center justify-center flex-row py-1.5 cursor-pointer rounded-md bg-main-blue">
                    <Check className="text-white cursor-pointer" size={14} />
                    <p className="text-white text-[11px]">Crear etiqueta</p>
                </button>
            </div>
        </div>
    )
}

export default EditableTag;