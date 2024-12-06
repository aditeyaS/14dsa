import {
  CodeBlock as CB,
  oneLight,
  oneDark,
  PrismLangauge,
  Theme,
} from "@react-email/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "./theme-provider";

const codeLight: Theme = {
  ...oneLight,
  base: {
    ...oneLight.base,
    background: "hsl(var(--muted))",
    color: "hsl(var(--muted-foreground))",
    borderRadius: "var(--radius)",
  },
};

const codeDark: Theme = {
  ...oneDark,
  base: {
    ...oneDark.base,
    background: "hsl(var(--muted))",
    color: "hsl(var(--muted-foreground))",
    borderRadius: "var(--radius)",
  },
};

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
            theme={theme === "light" ? codeLight : codeDark}
            code={code}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
