import React, { useState } from "react";
import { BrainIcon, DownIcon, UpIcon } from "../icons";

interface SolutionBlockProps {
  title: string;
  children: React.ReactNode;
}

export const SolutionBlock: React.FC<SolutionBlockProps> = ({
  title,
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="bg-base-1">
      <button
        className="w-full bg-base-1 hover:bg-base-2 rounded p-2"
        onClick={() => setShow(!show)}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg flex gap-1 items-center">
            <BrainIcon /> {title}
          </span>
          {show ? <UpIcon /> : <DownIcon />}
        </div>
      </button>
      <div className="px-1 pb-1">{show && <div>{children}</div>}</div>
    </div>
  );
};
