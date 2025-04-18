'use client';
import Image from "next/image";
import ThemeToggler from "./theme-toggler";
import { useTheme } from "../Functions/ThemeProvider";
import HeaderMenu from "./header-menu";

function Header() {

    const { theme } = useTheme();

    const lightLogoSrc = "/logo-claro.png";
    const darkLogoSrc = "/logo-obscuro.png";

    return (
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between h-auto">
            {/* Fila superior en sm, columna en md+ */}
            <div className="w-full flex justify-between items-center sm:w-auto">
                <Image
                    src={theme === "dark" ? lightLogoSrc : darkLogoSrc}
                    width={100}
                    height={100}
                    alt="Abstract"
                />
                <div className="block sm:hidden">
                    <ThemeToggler />
                </div>
            </div>

            <div className="w-full mt-6 sm:mt-0 flex justify-center items-center sm:flex-1">
                <HeaderMenu />
            </div>

            <div className="hidden sm:block">
                <ThemeToggler />
            </div>
        </div>
    )
}

export default Header;