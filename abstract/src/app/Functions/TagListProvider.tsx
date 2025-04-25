"use client";
import React, { createContext, useContext, useState } from "react";

export type Tag = {
    name: string,
    color: string
};

type TagListContextType = {
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

const TagListContext = createContext<TagListContextType>({
    tags: [],
    setTags: () => {},
});

export function TagListProvider({ children }: { children: React.ReactNode }) {
    const [tags, setTags] = useState<Tag[]>([]);

    return (
        <TagListContext.Provider value={{ tags, setTags }}>
            {children}
        </TagListContext.Provider>
    );
}

export const useList = () => useContext(TagListContext);