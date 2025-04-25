import { Box, History } from 'lucide-react';
import MyTagsModal from './my-tags-modal';
import TaskHistoryModal from './task-history-modal';

function HeaderMenu() {
    return(
        <div className="p-3 rounded-xl border max-w-96 w-full bg-slate-100 border-slate-200 flex flex-row gap-3 dark:bg-slate-900 dark:border-slate-800">
            <input type="search" placeholder="Buscar una tarea..." className="w-full border border-transparent focus:border-main-blue px-4 py-2 bg-slate-200 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 text-sm rounded-lg dark:text-slate-300"
            />

            <MyTagsModal />

            <TaskHistoryModal />
        </div>
    )
}

export default HeaderMenu;