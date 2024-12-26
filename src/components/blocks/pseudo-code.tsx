import { CodeBlock } from "./code-block";
import { Paragraph2 } from "./text";

export function PseudoCode({ text, code }: { text?: string; code: string }) {
  return (
    <div className="flex flex-col">
      <Paragraph2 className="underline text-muted-foreground -mb-2 decoration-foreground underline-offset-4">
        {text || "Pseudo Code"}
      </Paragraph2>
      <CodeBlock language="bash" code={code} />
    </div>
  );
}
