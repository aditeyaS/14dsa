import React from "react";
import { CodeBlock as CB, oneDark, oneLight } from "@react-email/code-block";
import { useTheme } from "./theme-provider";

interface CodeBlockProps {
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <CB
      language="python"
      lineNumbers={false}
      theme={theme === "dark" ? oneDark : oneLight}
      code={children}
      style={{ fontSize: "0.875rem" }}
    />
  );
};
