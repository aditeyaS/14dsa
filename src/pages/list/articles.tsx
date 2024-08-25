import React from "react";
import { ArticleListItem, PageHeading } from "../../components";
import { Article } from "../../types";

const articles: Article[] = [
  {
    name: "Python Lists",
    url: "https://www.w3schools.com/python/python_lists.asp",
    source: "w3schools.com",
  },
  {
    name: "Python Lists",
    url: "https://developers.google.com/edu/python/lists",
    source: "google.com",
  },
  {
    name: "More on Lists",
    url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
    source: "python.org",
  },
  {
    name: "Python Lists",
    url: "https://www.geeksforgeeks.org/python-lists/",
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
