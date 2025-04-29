'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../Functions/ThemeProvider';

function ThemeToggler() {

    const {theme, toggleTheme} = useTheme();

    return(
        <button id="toggler" onClick={toggleTheme} className="toggler flex flex-row gap-2 hover:cursor-pointer sm:left-auto">
            { theme === "light" ?
                (<Moon className="text-slate-800 dark:text-slate-100 hover:text-main-blue" size={24}/>)
                :
                (<Sun className="text-slate-800 dark:text-slate-100 hover:text-main-blue" size={24}/>)
            }
        </button>
    )
}

export default ThemeToggler;