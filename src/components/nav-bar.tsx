import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "../icons";
import { useTheme } from "./theme-provider";

export const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const onThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="w-full flex justify-between items-center  p-2 px-4 bg-base-1">
      <Link
        to="/"
        className="flex hover:bg-base-2 p-1 rounded items-center gap-2"
      >
        <img className="w-8 h-8" src="/logo.svg" />
        <span className="text-xl">PythonDSA</span>
      </Link>
      <button
        className="p-1 hover:bg-base-2 rounded-full"
        onClick={onThemeChange}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
