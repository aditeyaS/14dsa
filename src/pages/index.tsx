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
  StackIcon,
  StringIcon,
  TreeIcon,
  TupleIcon,
} from "../icons";
import { H1, H2 } from "../components";

type Topic = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

type AlgorithmListType = {
  url: string;
  name: string;
};
type Algorithm = {
  dataStructure: string;
  algos: AlgorithmListType[];
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
  {
    url: "binary-tree",
    name: "Binary Tree",
    icon: <BinaryTreeIcon />,
  },
];

const basics: Topic[] = [
  {
    url: "analysis",
    name: "Analysis",
    icon: <AnalysisIcon />,
  },
  {
    url: "recursion",
    name: "Recursion",
    icon: <RecursionIcon />,
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

const algorithmList: Algorithm[] = [
  {
    dataStructure: "list",
    algos: [
      {
        url: "binary-search",
        name: "Binary Search",
      },
      {
        url: "sorting-1",
        name: "Sorting 1: Bubble, Selection, and Insertion",
      },
      {
        url: "sorting-2",
        name: "Sorting 2: Merge, Quick, Heap",
      },
    ],
  },
];

export const Home: React.FC = () => {
  return (
    <div className="px-24">
      <H1>Basic</H1>
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
      <H1>Data Structures</H1>
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
      <H1>Algorithms</H1>
      <div className="flex flex-col gap-2">
        {algorithmList.map((algorithm) => (
          <>
            <H2 className="text-base-content/75 capitalize">
              {algorithm.dataStructure}
            </H2>
            <div className="flex flex-col gap-1">
              {algorithm.algos.map((algo) => (
                <Link
                  to={`algorithms/${algorithm.dataStructure}/${algo.url}`}
                  key={algo.url}
                >
                  <div className="bg-base-1 p-2 drop-shadow rounded hover:bg-base-2 flex gap-1 items-center">
                    <span className="text-xl text-primary">{algo.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
