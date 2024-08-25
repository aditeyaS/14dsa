import React from "react";
import { ArticleListItem, PageHeading } from "../../components";
import { Article } from "../../types";

const articles: Article[] = [
  {
    name: "Python Dictionaries",
    url: "https://www.w3schools.com/PYTHON/python_dictionaries.asp",
    source: "w3schools.com",
  },
  {
    name: "Dictionaries",
    url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
    source: "python.org",
  },
  {
    name: "Python dict() Function",
    url: "https://www.geeksforgeeks.org/python-dict-function/",
    source: "geeksforgeeks.org",
  },
];

export const Articles: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <PageHeading>Related Articles</PageHeading>
      <div className="flex flex-col gap-2">
        {articles.map((article, index) => (
          <ArticleListItem
            key={`dict-article-${index}`}
            url={article.url}
            name={article.name}
            source={article.source}
          />
        ))}
      </div>
    </div>
  );
};
