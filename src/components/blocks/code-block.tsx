import {
  CodeBlock as CB,
  oneLight,
  oneDark,
  Theme,
  PrismLanguage,
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
  language: PrismLanguage;
  code: string;
  lineNumbers?: boolean;
}

export function CodeBlock({ language, code, lineNumbers }: CodeBlockProps) {
  const { theme } = useTheme();

  return (
    <CB
      language={language}
      lineNumbers={lineNumbers}
      theme={theme === "light" ? codeLight : codeDark}
      code={code}
    />
  );
}
