"use client"

import { useState, useEffect } from "react";


export function Theme() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    function changeTheme() {
        setDark((prev) => !prev);
    }

    return (
        <div onClick={changeTheme} id="button" className={`fixed top-4 right-4 flex items-center w-16 h-8 px-2 ${dark ? "bg-[#616161]" : "bg-[#4743fa]"} rounded-full cursor-pointer z-50`}>
            <div 
                id="moon" 
                className={`absolute transition duration-300 ${dark ? "translate-x-[30px] opacity-100" : "translate-x-0 opacity-0"}`}
            >
                <i className="bi bi-moon-fill text-white"></i>
            </div>

            <div 
                id="sun" 
                className={`absolute transition duration-300 ${dark ? "translate-x-[30px]  opacity-0" : "translate-x-0 opacity-100"}`}
            >
                <i className="bi bi-brightness-low-fill text-2xl text-white"></i>
            </div>
        </div>
    )
}