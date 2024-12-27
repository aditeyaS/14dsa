import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { Paragraph } from "./text";

interface Props {
  text?: string;
  code: string;
  lineNumbers?: boolean;
  textClass?: string;
}

export function PseudoCode({
  text,
  code,
  lineNumbers = false,
  textClass,
}: Props) {
  return (
    <div className="flex flex-col">
      {text !== "" && (
        <Paragraph className={cn("-mb-2", textClass)}>
          {text || "Pseudo Code:"}
        </Paragraph>
      )}
      <CodeBlock language="bash" code={code} lineNumbers={lineNumbers} />
    </div>
  );
}
