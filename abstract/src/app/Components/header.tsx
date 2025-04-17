'use client';
import Image from "next/image";
import ThemeToggler from "./theme-toggler";
import { useTheme } from "../Functions/ThemeProvider";
import HeaderMenu from "./header-menu";

function Header() {

    const { theme } = useTheme();

    const lightLogoSrc = "/logo-claro.png";
    const darkLogoSrc = "/logo-obscuro.png";

    return(
        <div className="w-full flex items-center justify-between h-auto">
            <Image
                src={theme === "dark" ? lightLogoSrc : darkLogoSrc }
                width={100}
                height={100}
                alt="Abstract"
            />
            <HeaderMenu/>
            <ThemeToggler/>
        </div>
    )
}

export default Header;