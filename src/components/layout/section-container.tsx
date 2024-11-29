import React from "react";

export default function SectionContainer({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="py-4 flex flex-col  gap-2" {...props} />;
}
