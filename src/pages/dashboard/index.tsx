import React from "react";
import { Link } from "react-router-dom";
import {
  AnalysisIcon,
  BinaryTreeIcon,
  BitMagicIcon,
  CircularLinkedListIcon,
  DequeIcon,
  DictionaryIcon,
  DoublyLinkedListIcon,
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
  TrieIcon,
  TupleIcon,
} from "../../icons";
import { H1, H2 } from "../../components";

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
    url: "circular-linked-list",
    name: "Circular Linked List",
    icon: <CircularLinkedListIcon />,
  },
  {
    url: "doubly-linked-list",
    name: "Doubly Linked List",
    icon: <DoublyLinkedListIcon />,
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
    url: "matrix",
    name: "Matrix",
    icon: <MatrixIcon />,
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
    url: "binary-search-tree",
    name: "Binary Search Tree",
    icon: <BinaryTreeIcon />,
  },
  {
    url: "trie",
    name: "Trie",
    icon: <TrieIcon />,
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
  {
    dataStructure: "linked-list",
    algos: [
      {
        url: "2-pointers",
        name: "2 Pointers: Slow fast, cycle detection",
      },
    ],
  },
  {
    dataStructure: "tree",
    algos: [
      {
        url: "dfs",
        name: "Depth First (in-order, pre-order, post-order)",
      },
      {
        url: "bfs",
        name: "Breath First",
      },
      {
        url: "bst-operations",
        name: "BST operations",
      },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="px-24">
      <H1 className="text-base-content">Basic</H1>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {basics.map((topic) => (
          <Link to={`/basics/${topic.url}`} key={topic.url}>
            <div className="bg-base-1 p-2 drop-shadow rounded hover:bg-base-2 flex flex-col items-center">
              {topic.icon}
              <span className="text-xl text-primary">{topic.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <H1 className="text-base-content">Data Structures</H1>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {dataStructures.map((topic) => (
          <Link to={`/data-structures/${topic.url}`} key={topic.url}>
            <div className="bg-base-1 p-2 drop-shadow rounded hover:bg-base-2 flex flex-col items-center">
              {topic.icon}
              <span className="text-xl text-primary">{topic.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <H1 className="text-base-content">Algorithms</H1>
      <div className="flex flex-col gap-2">
        {algorithmList.map((algorithm) => (
          <>
            <H2 className="text-base-content/50 capitalize">
              {algorithm.dataStructure.replace("-", " ")}
            </H2>
            <div className="flex flex-col gap-1">
              {algorithm.algos.map((algo) => (
                <Link
                  to={`/algorithms/${algorithm.dataStructure}/${algo.url}`}
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

export default Dashboard;
