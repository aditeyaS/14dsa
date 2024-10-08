import React from "react";
import { cn } from "../lib/utils";

export const TABLE: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({
  className,
  ...props
}) => {
  return <table className={cn("border", className)} {...props} />;
};

export const TR: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
  className,
  ...props
}) => {
  return <tr className={cn(className)} {...props} />;
};

export const TH: React.FC<React.HTMLAttributes<HTMLTableHeaderCellElement>> = ({
  className,
  ...props
}) => {
  return (
    <th className={cn("font-bold border text-sm", className)} {...props} />
  );
};

export const TD: React.FC<React.HTMLAttributes<HTMLTableDataCellElement>> = ({
  className,
  ...props
}) => {
  return (
    <td
      className={cn(
        "border px-5 text-sm text-base-content/80 text-center",
        className
      )}
      {...props}
    />
  );
};
