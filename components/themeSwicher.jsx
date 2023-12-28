/** @format */

"use client";

import { useTheme } from "@/context/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 right-5 bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:animate-[wiggle_1s_ease-in-out_infinite] active:scale-105 transition-all dark:bg-white'
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className='text-white animate-[reverse_spin_.75s_ease-in-out]' />
      ) : (
        <SunIcon className='text-yellow-600 animate-[spin_.75s_ease-out]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}
