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
    <div className="w-full flex justify-between bg-primary p-2 px-4 text-primary-content">
      <Link to="/">
        <span className="text-xl">Python DSA</span>
      </Link>
      <button
        className="p-1 bg-accent hover:bg-accent/90 rounded-full"
        onClick={onThemeChange}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
