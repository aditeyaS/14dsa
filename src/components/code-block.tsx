import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <div className="border">
      <pre className="p-2 whitespace-pre">{children}</pre>
    </div>
  );
};
