'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function ThemeToggler() {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark"); //se agregó el '?' para evitar el error de posibilidad de nulo
        }
    }, [theme])

    function handleThemeChange() {
        setTheme(t => t === "light" ? "dark" : "light");
    }

    return(
        <button onClick={handleThemeChange} className="flex flex-row gap-2 hover:cursor-pointer">
            { theme === "light" ? <Moon className="text-slate-800 dark:text-slate-100 hover:text-main-blue" size={24}/>  : <Sun className="text-slate-800 dark:text-slate-100 hover:text-main-blue" size={24}/>}
        </button>
    )
}

export default ThemeToggler;