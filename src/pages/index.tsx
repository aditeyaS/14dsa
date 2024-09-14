import React from "react";
import { Link } from "react-router-dom";
import {
  AnalysisIcon,
  BinaryTreeIcon,
  BitMagicIcon,
  DequeIcon,
  DictionaryIcon,
  HeapIcon,
  LinkedListIcon,
  ListIcon,
  MathIcon,
  MatrixIcon,
  QueueIcon,
  RecursionIcon,
  SetIcon,
  SortingIcon,
  StackIcon,
  StringIcon,
  TreeIcon,
  TupleIcon,
} from "../icons";

type Topic = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

const dataStructures: Topic[] = [
  {
    url: "tuple",
    name: "Tuple",
    icon: <TupleIcon />,
  },
  {
    url: "dictionary",
    name: "Dictionary",
    icon: <DictionaryIcon />,
  },
  {
    url: "set",
    name: "Set",
    icon: <SetIcon />,
  },
  {
    url: "list",
    name: "List",
    icon: <ListIcon />,
  },
  {
    url: "string",
    name: "String",
    icon: <StringIcon />,
  },
  {
    url: "linked-list",
    name: "Linked List",
    icon: <LinkedListIcon />,
  },
  {
    url: "matrix",
    name: "Matrix",
    icon: <MatrixIcon />,
  },
  {
    url: "deque",
    name: "Deque",
    icon: <DequeIcon />,
  },
  {
    url: "stack",
    name: "Stack",
    icon: <StackIcon />,
  },
  {
    url: "queue",
    name: "Queue",
    icon: <QueueIcon />,
  },
  {
    url: "heap",
    name: "Heap",
    icon: <HeapIcon />,
  },
  {
    url: "tree",
    name: "Tree",
    icon: <TreeIcon />,
  },
];

const basics: Topic[] = [
  {
    url: "analysis",
    name: "Analysis",
    icon: <AnalysisIcon />,
  },
  {
    url: "math",
    name: "Math",
    icon: <MathIcon />,
  },
  {
    url: "bit-magic",
    name: "Bit Magic",
    icon: <BitMagicIcon />,
  },
];

const topicList: Topic[] = [
  {
    url: "recursion",
    name: "Recursion",
    icon: <RecursionIcon />,
  },

  {
    url: "sorting",
    name: "Sorting",
    icon: <SortingIcon />,
  },

  {
    url: "binary-tree",
    name: "Binary Tree",
    icon: <BinaryTreeIcon />,
  },
];

export const Home: React.FC = () => {
  return (
    <div className="px-24">
      <h1 className="text-4xl mb-10 font-bold">Basic</h1>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {basics.map((topic) => (
          <Link to={`basics/${topic.url}`} key={topic.url}>
            <div className="bg-base-1 p-2 drop-shadow rounded hover:bg-base-2 flex flex-col items-center">
              {topic.icon}
              <span className="text-xl text-primary">{topic.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="text-4xl my-10 font-bold">Data Structures</h1>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {dataStructures.map((topic) => (
          <Link to={`data-structures/${topic.url}`} key={topic.url}>
            <div className="bg-base-1 p-2 drop-shadow rounded hover:bg-base-2 flex flex-col items-center">
              {topic.icon}
              <span className="text-xl text-primary">{topic.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
