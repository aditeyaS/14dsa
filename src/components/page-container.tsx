import React from "react";

interface PageContainerProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-2">
        <div className="p-5 ring rounded-full ring-accent">{icon}</div>
        <h1 className="text-4xl">{title}</h1>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
};
