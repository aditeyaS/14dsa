import React from "react";
import { CodeBlock as CB, oneDark, oneLight } from "@react-email/code-block";
import { useTheme } from "./theme-provider";
import { useFontSize } from "./font-size-provider";

interface CodeBlockProps {
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const { theme } = useTheme();
  const { fontSize } = useFontSize();

  const fontSizeMapping = {
    S: "0.875rem",
    M: "1rem",
    L: "1.25rem",
  };

  return (
    <CB
      language="python"
      lineNumbers={false}
      theme={theme === "dark" ? oneDark : oneLight}
      code={children}
      style={{ fontSize: fontSizeMapping[fontSize] }}
    />
  );
};
