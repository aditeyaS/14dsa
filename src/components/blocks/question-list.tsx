import Question from "@/types/question";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const difficultyVariants = cva([], {
  variants: {
    difficulty: {
      easy: "bg-green-400",
      medium: "bg-yellow-400",
      hard: "bg-red-400",
    },
  },
  defaultVariants: {
    difficulty: "easy",
  },
});

interface QuestionListProps {
  questions: Question[];
}

export function QuestionList({ questions }: QuestionListProps) {
  return (
    <ul className="space-y-1">
      {questions.map((question, qI) => (
        <li key={`question-${qI + 1}`}>
          <Card>
            <CardContent className="p-4 space-y-1">
              <div className="flex items-center justify-between">
                <a
                  className="flex gap-2 text-xl items-center hover:underline underline-offset-4"
                  target="_blank"
                  href={question.source}
                >
                  {question.title} <ExternalLink className="w-4" />
                </a>
                <Badge
                  className={cn(
                    difficultyVariants({ difficulty: question.difficulty })
                  )}
                >
                  {question.difficulty}
                </Badge>
              </div>
              <div className="flex gap-2">
                {question.topics.map((t, tI) => (
                  <Badge key={`q-${qI}-t-${tI}`} variant={"secondary"}>
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
