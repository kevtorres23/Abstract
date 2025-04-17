'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {} //placeholder de una función
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    function toggleTheme() {
        setTheme(t => t === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);