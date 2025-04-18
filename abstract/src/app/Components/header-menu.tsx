import { Box, History } from 'lucide-react';

function HeaderMenu() {
    return(
        <div className="p-3 rounded-xl border max-w-80 w-full bg-slate-100 border-slate-200 flex flex-row gap-3 dark:bg-slate-900 dark:border-slate-800">
            <input type="search" placeholder="Buscar una tarea..." className="w-full border border-transparent focus:border-main-blue px-4 py-2 bg-slate-200 placeholder-slate-400 text-sm rounded-lg
            dark:bg-slate-700 dark:text-slate-300"
            />

            <button className="bg-main-blue p-2 rounded-lg self-center hover:opacity-80">
                <Box className="text-slate-50" size={20}/>
            </button>

            <button className="bg-main-blue p-2 rounded-lg self-center hover:opacity-80">
                <History className="text-slate-50" size={20}/>
            </button>
        </div>
    )
}

export default HeaderMenu;