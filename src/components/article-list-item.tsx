import React from "react";

interface ArticleListItemProps {
  url: string;
  name: string;
  source: string;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  url,
  name,
  source,
}) => {
  return (
    <a
      className="p-2 flex flex-col gap-2 bg-base-1 hover:bg-base-2 rounded"
      target="_blank"
      href={url}
    >
      <span>{name}</span>
      <div>
        <span className="bg-primary rounded-xl px-2 py-0.5 text-sm">
          {source}
        </span>
      </div>
    </a>
  );
};
