import React from "react";
import { useFontSize } from "./font-size-provider";
import { cn } from "../lib/utils";

export const CodeFontSizeSelect: React.FC = () => {
  const { fontSize, setFontSize } = useFontSize();
  return (
    <div className="flex flex-col">
      <span className="text-xs">Code font size</span>
      <div className="flex gap-0.5">
        <FontSizeButton
          onClick={() => setFontSize("S")}
          isSelected={fontSize === "S"}
        >
          S
        </FontSizeButton>
        <FontSizeButton
          onClick={() => setFontSize("M")}
          isSelected={fontSize === "M"}
        >
          M
        </FontSizeButton>
        <FontSizeButton
          onClick={() => setFontSize("L")}
          isSelected={fontSize === "L"}
        >
          L
        </FontSizeButton>
      </div>
    </div>
  );
};

interface FontSizeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  children: string;
}

const FontSizeButton: React.FC<FontSizeButtonProps> = ({
  isSelected,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "border border-primary w-5 h-5 flex items-center justify-center text-xs font-bold rounded",
        isSelected ? "bg-primary" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
