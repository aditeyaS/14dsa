import * as React from "react";
import { cn } from "../lib/utils";
import { ImportantIcon, TipIcon } from "../icons";

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
    }
    return color;
  };

  return (
    <div
      className={cn(
        "p-2 border border-l-2 rounded flex flex-col gap-2",
        className,
        getBorderColor(type)
      )}
    >
      <div>
        {type === "Note" && <div>{type}</div>}
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
        {type === "Warning" && <div></div>}
        {type === "Caution" && <div></div>}
      </div>
      <pre className="p-2 whitespace-pre">{children}</pre>
    </div>
  );
};
