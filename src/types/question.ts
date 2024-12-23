type Topics =
  | "list"
  | "string"
  | "set"
  | "prefix sum"
  | "sliding window"
  | "kadane's algorithm";

interface Question {
  title: string;
  source: string;
  topics: Topics[];
  difficulty: "easy" | "medium" | "hard";
}

export default Question;
