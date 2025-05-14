"use client";
import React, { createContext, useContext, useState } from "react";
import FilledVariant from "../Components/filled-task";

// estructura de una etiqueta
type Tag = {
    name: string,
    color: string,
    id: number,
}

// estructura de una tarea
interface Task {
    title: string,
    description: string,
    date: string,
    tags: Tag[],
}

// definiendo el tipo del contexto
type TaskListContextType = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    addTask: (taskContent: Task) => void;
}

// definiendo el contexto
const TaskListContext = createContext<TaskListContextType>({
    tasks: [],
    setTasks: () => { },
    addTask: () => { },
});

export function TaskListProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        <TaskListContext.Provider value={{ tasks, setTasks, addTask }}>
            {children}
        </TaskListContext.Provider>
    );
}

export const useTaskList = () => useContext(TaskListContext);