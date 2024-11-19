import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "../icons";
import { useTheme } from "./theme-provider";
import { LogoIcon } from "../icons";
import { CodeFontSizeSelect } from "./code-font-size-select";

export const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full flex justify-between items-center  p-2 px-4 bg-base-1">
      <Link
        to="/dashboard"
        className="flex hover:bg-base-2 p-1 rounded items-center gap-2"
      >
        <LogoIcon className="w-8 h-8" />
        <span className="text-xl">PythonDSA</span>
      </Link>
      <CodeFontSizeSelect />
      <button
        className="p-1 hover:bg-base-2 rounded-full"
        onClick={onThemeChange}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
