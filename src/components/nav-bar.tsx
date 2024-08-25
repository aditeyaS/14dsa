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
    <div className="w-full flex justify-between  p-2 px-4 bg-base-1">
      <Link to="/">
        <span className="text-xl">PythonDSA</span>
      </Link>
      <button
        className="p-1 bg-base-2 hover:bg-primary/90 rounded-full"
        onClick={onThemeChange}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
