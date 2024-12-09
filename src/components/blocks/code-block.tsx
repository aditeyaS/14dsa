import {
  CodeBlock as CB,
  oneLight,
  oneDark,
  PrismLangauge,
  Theme,
} from "@react-email/code-block";
import { useTheme } from "../theme-provider";

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
  language: PrismLangauge;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const { theme } = useTheme();

  return (
    <CB
      language={language}
      lineNumbers={false}
      theme={theme === "light" ? codeLight : codeDark}
      code={code}
    />
  );
}
