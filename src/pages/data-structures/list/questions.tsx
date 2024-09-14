import React from "react";
import { PageHeading, QuestionListItem } from "../../../components";
import { Question } from "../../../types";

const questions: Question[] = [
  {
    name: "485. Max Consecutive Ones",
    url: "https://leetcode.com/problems/max-consecutive-ones/description/",
    isRecommended: true,
    level: "easy",
    topics: ["array"],
  },
  {
    name: "268. Missing Number",
    url: "https://leetcode.com/problems/missing-number/description/",
    isRecommended: false,
    level: "easy",
    topics: ["array", "hash table", "binary search", "sorting"],
  },
  {
    name: "136. Single Number",
    url: "https://leetcode.com/problems/single-number/description/",
    isRecommended: false,
    level: "easy",
    topics: ["array"],
  },
  {
    name: "283. Move Zeroes",
    url: "https://leetcode.com/problems/move-zeroes/description/",
    isRecommended: false,
    level: "easy",
    topics: ["array", "2 pointers"],
  },
];

export const Questions: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <PageHeading>Related Questions</PageHeading>
      <div className="flex flex-col gap-2">
        {questions.map((question, index) => (
          <QuestionListItem
            key={`btq-${index}}`}
            index={index}
            url={question.url}
            name={question.name}
            level={question.level}
            isRecommended={question.isRecommended}
            topics={question.topics}
          />
        ))}
      </div>
    </div>
  );
};
