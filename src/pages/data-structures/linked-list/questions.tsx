import React from "react";
import {
  H1,
  PageSectionContainer,
  QuestionListItem,
} from "../../../components";
import { Question } from "../../../types";

const questions: Question[] = [
  {
    name: "3217. Delete Nodes From Linked List Present in Array",
    url: "https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/",
    isRecommended: true,
    level: "medium",
    topics: ["linked list", "set"],
  },
];

export const Questions: React.FC = () => {
  return (
    <PageSectionContainer>
      <H1>Related Questions</H1>
      <div className="flex flex-col gap-1">
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
    </PageSectionContainer>
  );
};
