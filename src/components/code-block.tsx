import {
  CodeBlock as CB,
  oneDark,
  oneLight,
  PrismLangauge,
} from "@react-email/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "./theme-provider";

interface CodeBlockProps {
  languages: PrismLangauge[];
  snippets: string[];
}

export default function CodeBlock({ languages, snippets }: CodeBlockProps) {
  const { theme } = useTheme();

  if (languages.length !== snippets.length) {
    throw new Error("Number of languages should be equal to the snippets");
  }
  return (
    <Tabs defaultValue={languages[0]}>
      <TabsList>
        {languages.map((l) => (
          <TabsTrigger key={l} value={l}>
            {l}
          </TabsTrigger>
        ))}
      </TabsList>
      {snippets.map((code, i) => (
        <TabsContent key={languages[i]} value={languages[i]}>
          <CB
            language={languages[i]}
            lineNumbers={false}
            theme={theme === "light" ? oneLight : oneDark}
            code={code}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
