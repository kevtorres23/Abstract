
import React, { useState, useEffect } from "react";
import SectionName from "./section-name";
import DefaultVariant from "./default-task";
import EditableVariant from "./editable-task";
import FilledVariant from "./filled-task";

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

// los tres diferentes tipos de secciones que se manejan en la apps
type sectionName = "porHacer" | "enProceso" | "terminadas";

// variantes que pueden tener los nombres de cada sección
const sectionNameVariants: Record<sectionName, React.ReactNode> = {
    porHacer: "Por hacer",
    enProceso: "En proceso",
    terminadas: "Terminadas",
}

type movementData = {
    currentSection: sectionName,
    newSection: sectionName,
    index: number,
}

type TaskProps = {
    sectionName: sectionName,
    taskList: Task[],
    onAdditionRequest: (task: Task, sectionName: sectionName) => void,
    onRemovalRequest: (index: number, taskSection: sectionName) => void,
    onMovementRequest: (movementTaskData: movementData) => void,
    onSaveRequest: (modifiedTask: Task, section: sectionName, index: number) => void;
}

function TaskSection(props: TaskProps) {

    const [taskStatus, setTaskStatus] = useState("default");

    // listas de tareas
    const [lista, setLista] = useState<Task[]>(props.taskList);

    useEffect(() => {
        if (lista.length === 0) {
            setTaskStatus("default");
        };

        if (lista.length >= 1) {
            setTaskStatus("filled");
        };

    }, [lista]);

    useEffect(() => {
        setLista(props.taskList);
    }, [props.taskList]);

    function editableTask() {
        setTaskStatus("editable");
    }

    function modifyTask() {
        setTaskStatus("modifiable");
    }

    function defaultTask() {
        setTaskStatus("default");
    }

    function handleAddTask(newTask: Task) {
        setTaskStatus("filled");
        props.onAdditionRequest(newTask, props.sectionName);
    }

    function handleSaveTask(modifiedTask: Task, section: sectionName, index: number) {
        props.onSaveRequest(modifiedTask, section, index);
    }

    function handleMoveTask(taskData: movementData) {
        props.onMovementRequest(taskData);
    };

    function handleRemoveTask(index: number) {
        props.onRemovalRequest(index, props.sectionName);
    }

    return (
        <div className="w-full flex flex-col gap-5">
            <SectionName name={sectionNameVariants[props.sectionName]} taskCounter={lista.length} onAddTask={editableTask} />
            {(lista.length === 0 && taskStatus === "default") && (
                <DefaultVariant sectionName={props.sectionName} onEditSelected={editableTask} />

            )} {(lista.length === 0 && taskStatus === "editable") && (
                <EditableVariant onAddSelected={handleAddTask} onCancelSelected={defaultTask} />

            )} {(lista.length >= 1 && taskStatus === "filled") && (
                <>
                    {lista.map((tarea, index) => <li key={index}>
                        <FilledVariant currentSection={props.sectionName}
                            tarea={tarea}
                            index={index}
                            onRemoveSelected={handleRemoveTask}
                            onMoveSelected={handleMoveTask}
                            onEditSelected={modifyTask}
                            onSaveSelected={handleSaveTask}
                        />
                    </li>)}
                </>
            )}
            {(lista.length >= 1 && taskStatus === "editable") && (
                <>
                    {lista.map((tarea, index) => <li key={index}>
                        <FilledVariant currentSection={props.sectionName}
                            tarea={tarea}
                            index={index}
                            onRemoveSelected={handleRemoveTask}
                            onMoveSelected={handleMoveTask}
                            onEditSelected={modifyTask}
                            onSaveSelected={handleAddTask}
                        />
                    </li>)}
                    <EditableVariant onAddSelected={handleAddTask} onCancelSelected={defaultTask} />
                </>
            )}
        </div>
    )
}

export default TaskSection;