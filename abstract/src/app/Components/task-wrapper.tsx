import React, { useState } from 'react';
import TaskSection from "./task-section";

type Tag = {
    name: string,
    color: string,
}

interface Task {
    title: string,
    description: string,
    date: string,
    tags: Tag[],
}

type SectionLists = {
    porHacerList: Task[],
    enProcesoList: Task[],
    terminadasList: Task[]
}

type SectionName = "porHacer" | "enProceso" | "terminadas";
type SectionListsNames = "porHacerList" | "enProcesoList" | "terminadasList";

const sectionListNameVariants: Record<SectionName, SectionListsNames> = {
    porHacer: "porHacerList",
    enProceso: "enProcesoList",
    terminadas: "terminadasList",
}

function TaskWrapper() {
    // sectionTasks es un objeto de arrays de un objeto
    const [sectionTasks, setSectionTasks] = useState<SectionLists>({
        porHacerList: [],
        enProcesoList: [],
        terminadasList: [],
    });

    type movementData = {
        currentSection: SectionName,
        newSection: SectionName,
        index: number,
    }

    function handleMoveTask(movementTaskData: movementData) {
        const prevSection = sectionListNameVariants[movementTaskData.currentSection];
        const newSection = sectionListNameVariants[movementTaskData.newSection];
        if (prevSection === newSection) {
            return;
        } else {
            setSectionTasks({
                ...sectionTasks,
                [newSection]: [...sectionTasks[newSection], sectionTasks[prevSection][movementTaskData.index]], // añade la tarea a la nueva sección
                [prevSection]: sectionTasks[prevSection].filter((_, i) => i !== movementTaskData.index), // elimina la tarea de la previa sección
            });
        }
    }

    function handleAddTask(taskContent: Task, taskSection: SectionName) {
        const sectionKey = sectionListNameVariants[taskSection]
        setSectionTasks({
            ...sectionTasks,
            [sectionKey]: [...sectionTasks[sectionKey], taskContent]
        });
    };

    function handleRemoveTask(index: number, taskSection: SectionName) {
        const sectionKey = sectionListNameVariants[taskSection];
        let confirmacion = confirm("¿Estás seguro de que quieres eliminar esta tarea?");
        if (confirmacion) {
            setSectionTasks(prevData => ({
                ...prevData,
                [sectionKey]: prevData[sectionKey].filter((_, i) => i !== index)
            })
            );
        };
    };

    function handleSaveTask(taskNewContent: Task, taskSection: SectionName, index: number) {
        const sectionKey = sectionListNameVariants[taskSection]
        setSectionTasks({
            ...sectionTasks,
            [sectionKey]: sectionTasks[sectionKey].map((task, i) => i === index ? taskNewContent : task)
        })
    }

    return (
        <div className="w-full h-full flex md:flex-row justify-between lg:gap-16 gap-10 flex-col lg:px-24 sm:px-0">
            <TaskSection sectionName="porHacer"
                taskList={sectionTasks.porHacerList}
                onAdditionRequest={handleAddTask}
                onMovementRequest={handleMoveTask}
                onRemovalRequest={handleRemoveTask}
                onSaveRequest={handleSaveTask}/>

            <TaskSection sectionName="enProceso"
                taskList={sectionTasks.enProcesoList}
                onAdditionRequest={handleAddTask}
                onMovementRequest={handleMoveTask}
                onRemovalRequest={handleRemoveTask}
                onSaveRequest={handleSaveTask}/>
                

            <TaskSection sectionName="terminadas"
                taskList={sectionTasks.terminadasList}
                onAdditionRequest={handleAddTask}
                onMovementRequest={handleMoveTask}
                onRemovalRequest={handleRemoveTask}
                onSaveRequest={handleSaveTask}/>
        </div>
    )
}

export default TaskWrapper;