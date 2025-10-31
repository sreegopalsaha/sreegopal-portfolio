"use client";
import { Sun, Moon } from "lucide-react";
import { useThemeToggle } from "./ui/skiper-ui/skiper26";

const ThemeToggleButton = () => {
  const { toggleTheme } = useThemeToggle({
    variant: "gif",
    gifUrl:
      "https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s",
  });

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center p-2.5 rounded-md 
        border border-neutral-200 dark:border-neutral-700
        backdrop-blur-md
        transition-transform duration-500 ease-in-out
        hover:scale-[1.07] active:scale-[0.95]
        focus:outline-none
      "
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Moon
          className="
            absolute w-5 h-5 transition-all duration-700 ease-in-out
            opacity-100 rotate-0 scale-100
            dark:opacity-0 dark:-rotate-90 dark:scale-75
          "
        />
        <Sun
          className="
            absolute w-5 h-5 transition-all duration-700 ease-in-out
            opacity-0 rotate-90 scale-75
            dark:opacity-100 dark:rotate-0 dark:scale-100
          "
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
