import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "../lib/utils.ts";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "light") {
            // Start in light mode
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Default: dark mode
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []);

    function toggleTheme() {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn(
            "fixed  top-3 right-0.5 md:right-5 z-70 p-2 rounded-full transition-colors duration-300 ",
            "focus:outline-hidden"
        )}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
}