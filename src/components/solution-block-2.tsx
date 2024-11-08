import React, { useState } from "react";
import { BrainIcon, DownIcon, UpIcon } from "../icons";
import { CodeBlock } from "./code-block";
import ApiClient from "../lib/api-client";

interface SolutionBlock2Props {
  title: string;
  folder: string;
  file: string;
  isExampleAvailable?: boolean;
}

export const SolutionBlock2: React.FC<SolutionBlock2Props> = ({
  title,
  folder,
  file,
  isExampleAvailable = false,
}) => {
  const apiClient = new ApiClient();
  const [show, setShow] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const handleShow = async () => {
    if (code === "") {
      try {
        const data = await apiClient.getCode(`${folder}/${file}.py`);
        setCode(data.trim());
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }
    setShow((prev) => !prev);
  };

  return (
    <div className="bg-base-1">
      <button
        className="w-full bg-base-1 hover:bg-base-2 rounded p-2"
        onClick={handleShow}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg flex gap-1 items-center">
            <BrainIcon /> {title}
          </span>
          {show ? <UpIcon /> : <DownIcon />}
        </div>
      </button>
      <div className="px-1 pb-1">
        {show && (
          <div className="relative w-full">
            <a
              className="absolute right-2 top-2 bg-primary z-50 p-1 rounded"
              target="_blank"
              href={`https://github.com/aditeyaS/python-dsa/blob/main/src/pages/${folder}/${file}${
                isExampleAvailable ? "_ex" : ""
              }.py`}
            >
              <svg className="w-6 h-6" viewBox="0 -960 960 960">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
              </svg>
            </a>
            <CodeBlock>{code}</CodeBlock>
          </div>
        )}
      </div>
    </div>
  );
};
