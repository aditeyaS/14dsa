import React from "react";
import { cn } from "../lib/utils";
import { FavoriteIcon } from "../icons";

interface QuestionListItemProps {
  index: number;
  level: "easy" | "medium" | "hard";
  url: string;
  name: string;
  isRecommended: boolean;
  topics: string[];
}

export const QuestionListItem: React.FC<QuestionListItemProps> = ({
  name,
  index,
  level = "medium",
  isRecommended,
  topics,
  url,
}) => {
  const getBadgeColor = (level: "easy" | "medium" | "hard") => {
    let color = "";
    if (level == "easy") {
      color = "bg-green";
    } else if (level == "medium") {
      color = "bg-yellow";
    } else {
      color = "bg-red";
    }
    return color;
  };
  return (
    <a
      className="p-2 flex flex-col gap-2 bg-base-1 hover:bg-base-2 rounded"
      href={url}
      target="_blank"
    >
      <div className="flex gap-2 items-center">
        <span>{name}</span>
        <span className={cn("rounded-xl px-2 text-xs", getBadgeColor(level))}>
          {level}
        </span>
        {isRecommended && (
          <span className="text-xs">
            <FavoriteIcon />
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {topics.map((t, i) => (
          <span
            key={`btqt-${index}-${i}`}
            className="border border-primary rounded-xl px-2 py-0.5 text-sm text-primary"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};
