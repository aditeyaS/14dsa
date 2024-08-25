export type Article = {
  name: string;
  url: string;
  source: string;
};

export type Question = {
  name: string;
  url: string;
  isRecommended: boolean;
  level: "easy" | "medium" | "hard";
  topics: string[];
};
