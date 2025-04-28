"use client";
import React, { createContext, useContext, useState } from "react";

export type Tag = {
    name: string,
    color: string,
    id: number,
};

type TagListContextType = {
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    addTag: (name: string, color: string) => void;
};

const TagListContext = createContext<TagListContextType>({
    tags: [],
    setTags: () => {},
    addTag: () => {},
});

export function TagListProvider({ children }: { children: React.ReactNode }) {
    const [tags, setTags] = useState<Tag[]>([]);

    const addTag = (name: string, color: string) => {
        const newTag: Tag = {
            name,
            color,
            id: Date.now(),
        };
        setTags((prevTags) => [...prevTags, newTag]);
    }

    return (
        <TagListContext.Provider value={{ tags, setTags, addTag }}>
            {children}
        </TagListContext.Provider>
    );
}

export const useList = () => useContext(TagListContext);