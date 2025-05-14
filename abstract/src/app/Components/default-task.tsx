import React from "react";
import { Plus, ArrowDownWideNarrow, NotebookPen, BookCheck } from "lucide-react";

const iconVariants: Record<sectionName, React.ReactNode> = {
    porHacer: <ArrowDownWideNarrow className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
    enProceso: <NotebookPen className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
    terminadas: <BookCheck className="text-main-blue hover:text-main-blue cursor-pointer" size={20} />,
};

// variantes que pueden tener las descripciones de cada sección
const descriptionVariants: Record<sectionName, string> = { //sectionName: porHacer, enProceso, terminadas || string: "Añade o mueve..."
    porHacer: "Añade o mueve a esta sección las tareas en las que aún no has empezado a trabajar aún.",
    enProceso: "Añade o mueve a esta sección las tareas en las que te encuentras trabajando actualmente.",
    terminadas: "Añade o mueve a esta sección las tareas que ya fueron completadas o entregadas."
};

// los tres diferentes tipos de secciones que se manejan en la app
type sectionName = "porHacer" | "enProceso" | "terminadas";

type DefaultVariantProps = {
    sectionName: sectionName;
    onEditSelected: () => void; // método de la función compartida
}

function DefaultVariant(props: DefaultVariantProps) {

    function editableTask() {
        props.onEditSelected();
    }

    return (
        <div className="w-full sm:p-6 p-4 gap-5 flex flex-col bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg">
            <div className="contenido w-full flex flex-col gap-5">
                <div className="p-2 rounded-lg bg-main-blue-15 self-start">{iconVariants[props.sectionName]}</div>
                <p className="text-slate-600 dark:text-slate-400 text-[13px] font-normal">{descriptionVariants[props.sectionName]}</p>
                <button onClick={editableTask} className="flex gap-3 md:self-auto sm:self-start self-auto lg:px-5 md:px-2 px-5 items-center justify-center flex-row py-2.5 cursor-pointer rounded-md bg-main-blue">
                    <Plus className="text-white cursor-pointer" size={16} />
                    <p className="text-white text-xs">Agregar una tarea</p>
                </button>
            </div>
        </div>
    )
}

export default DefaultVariant;