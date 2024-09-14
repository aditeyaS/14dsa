import React from "react";
import { PageHeading, QuestionListItem } from "../../../components";
import { Question } from "../../../types";

const questions: Question[] = [];

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
