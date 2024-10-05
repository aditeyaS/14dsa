import React from "react";
import { H1 } from "./text";

interface PageContainerProps {
  title: string;
  icon?: React.ReactNode;
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
        {icon && (
          <div className="p-5 ring rounded-full ring-primary">{icon}</div>
        )}
        <H1>{title}</H1>
      </div>
      <div className="mt-10 px-24 flex flex-col gap-8">{children}</div>
    </div>
  );
};
