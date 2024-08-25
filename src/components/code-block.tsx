import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <div className="border-l border-base-2">
      <pre className="p-2 whitespace-pre text-lg">{children}</pre>
    </div>
  );
};
