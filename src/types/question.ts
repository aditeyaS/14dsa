type Topics = "prefix sum" | "list";

interface Question {
  title: string;
  source: string;
  topics: Topics[];
  difficulty: "easy" | "medium" | "hard";
}

export default Question;
