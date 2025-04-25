
"use client";
import React, { useState } from "react";
import { Box, Plus, X } from "lucide-react";
import TagList from "./tag-list";
import EditableTag from "./editable-tag";

type Tag = {
    name: string,
    color: string,
}

type TagListType = Tag[];

function MyTagsModal() {
    const [tagList, setTagList] = useState<TagListType>([]);
    const [modal, setModal] = useState(false);
    const [editableTag, setEditableTag] = useState(false);

    function toggleModal() {
        setModal(!modal);
    }

    function handleAddTag(tagName: string, tagColor: string) {
        const newTag = {
            name: tagName,
            color: tagColor
        }

        console.log(tagColor);

        setEditableTag(!editableTag);

        setTagList(t => [...t, newTag])
    }

    function handleTagEdition() {
        setEditableTag(!editableTag);
    }

    return (
        <>
            <button onClick={toggleModal} title="Mis etiquetas" className="bg-main-blue p-2 rounded-lg self-center hover:opacity-80 cursor-pointer">
                <Box className="text-slate-50" size={20} />
            </button>

            {modal && (
                <div className="modal w-screen h-screen top-0 bottom-0 left-0 right-0 fixed">
                    <div className="overlay w-screen h-screen md:p-0 px-6 bg-modal-background flex items-center justify-center">
                        <div className="modal-content flex flex-col bg-slate-50 dark:bg-slate-900 dark:border-2 dark:border-slate-800 rounded-lg max-w-2xl w-full h-auto p-7 gap-5">
                            <div className="flex flex-col gap-2">
                                <div className="upper flex flex-row w-full justify-between">
                                    <div className="title flex flex-row gap-1.5 items-center">
                                        <Box className="text-slate-700 dark:text-slate-300" size={18} strokeWidth={2.5} />
                                        <h1 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Mis etiquetas</h1>
                                    </div>

                                    <button className="close-overlay cursor-pointer" onClick={toggleModal}>
                                        <X className="text-slate-700 hover:text-main-blue dark:text-slate-300" size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <p className="text-[13px] font-normal text-slate-500 dark:text-slate-400">Haz clic en alguna de las etiquetas para editarla o eliminarla, o crea una nueva.</p>
                            </div>

                            <div className="tags-container flex flex-row gap-3">
                                <button onClick={handleTagEdition} className="flex flex-row gap-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md py-1 px-2 items-center cursor-pointer">
                                    <Plus className="text-gray-600 dark:text-gray-400 cursor-pointer" size={14} />
                                    Nueva etiqueta
                                </button>

                                {(editableTag) && (
                                    <div className="absolute mt-10">
                                        <EditableTag onAddSelected={handleAddTag} onCancelSelected={handleTagEdition} />
                                    </div>
                                )}
                                <TagList list={tagList}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MyTagsModal;