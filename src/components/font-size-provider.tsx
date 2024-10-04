import { createContext, useContext, useEffect, useState } from "react";

type FontSize = "S" | "M" | "L";
const FONT_SIZE_KEY = "data-font-size";

type FontSizeProviderProps = {
  children: React.ReactNode;
  defaultFontSize?: FontSize;
  storageKey?: string;
};

type FontSizeProviderState = {
  fontSize: FontSize;
  setFontSize: (fontSize: FontSize) => void;
};

const initialState: FontSizeProviderState = {
  fontSize: "S",
  setFontSize: () => null,
};

const FontSizeProviderContext =
  createContext<FontSizeProviderState>(initialState);

export function FontSizeProvider({
  children,
  ...props
}: FontSizeProviderProps) {
  const [fontSize, setFontSize] = useState<FontSize>(
    () => (localStorage.getItem(FONT_SIZE_KEY) as FontSize) || "S"
  );

  useEffect(() => {
    document.querySelector("html")?.setAttribute(FONT_SIZE_KEY, fontSize);
  }, [fontSize]);

  const value = {
    fontSize,
    setFontSize: (fontSize: FontSize) => {
      localStorage.setItem(FONT_SIZE_KEY, fontSize);
      setFontSize(fontSize);
    },
  };

  return (
    <FontSizeProviderContext.Provider {...props} value={value}>
      {children}
    </FontSizeProviderContext.Provider>
  );
}

export const useFontSize = () => {
  const context = useContext(FontSizeProviderContext);

  if (context === undefined)
    throw new Error("useFontSize must be used within a FontSizeProvider");

  return context;
};
