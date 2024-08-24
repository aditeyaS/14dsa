import React from "react";
import { Link } from "react-router-dom";
import { DictionaryIcon, ListIcon, SetIcon, StackIcon } from "../icons";

type Topic = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

const topicList: Topic[] = [
  {
    url: "list",
    name: "List",
    icon: <ListIcon />,
  },
  {
    url: "stack",
    name: "Stack",
    icon: <StackIcon />,
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
];

export const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3">
      {topicList.map((topic) => (
        <Link to={topic.url} key={topic.url}>
          <div>
            {topic.icon}
            <span>{topic.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
