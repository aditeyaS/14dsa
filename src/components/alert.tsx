import * as React from "react";
import { cn } from "../lib/utils";
import { CautionIcon, ImportantIcon, NoteIcon, TipIcon } from "../icons";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "Note" | "Tip" | "Important" | "Warning" | "Caution";
}

export const Alert: React.FC<AlertProps> = ({ type, children, className }) => {
  const getBorderColor = (
    type: "Note" | "Tip" | "Important" | "Warning" | "Caution"
  ) => {
    let color = "";
    if (type === "Tip") {
      color = "border-yellow";
    } else if (type === "Important") {
      color = "border-green";
    } else if (type === "Caution") {
      color = "border-red";
    } else if (type === "Note") {
      color = "border-blue";
    }
    return color;
  };

  return (
    <div
      className={cn(
        "p-2 border border-2 rounded flex flex-col gap-2",
        className,
        getBorderColor(type)
      )}
    >
      <div>
        {type === "Note" && (
          <div className="flex gap-2 text-blue">
            <NoteIcon />
            {type}
          </div>
        )}
        {type === "Tip" && (
          <div className="flex gap-2 text-yellow">
            <TipIcon />
            {type}
          </div>
        )}
        {type === "Important" && (
          <div className="flex gap-2 text-green">
            <ImportantIcon />
            {type}
          </div>
        )}
        {type === "Caution" && (
          <div className="flex gap-2 text-red">
            <CautionIcon />
            {type}
          </div>
        )}
        {type === "Warning" && <div></div>}
      </div>
      {children}
      {/* <pre className="p-2 whitespace-pre">{children}</pre> */}
    </div>
  );
};
