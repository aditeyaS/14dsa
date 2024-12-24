import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  Paragraph,
} from "@/components/blocks";
import { pyradixsort } from "./code";

export default function RadixSort() {
  return (
    <PageContainer pageTitle="Radix Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>uses counting sort as subroutine</LI>
          <LI>Used when element range is small</LI>
          <LI>
            <SpaceTimeComplexity
              time="O(d * (n + b))"
              timeLevel={3}
              space="O(1)"
              spaceLevel={1}
            />
            <span className="text-sm text-muted-foreground">{`d -> total no of digits, b -> 10 (base))`}</span>
          </LI>
        </UL>
        <Paragraph className="flex flex-col text-sm text-muted-foreground gap-1 my-4">
          <span className="underline">EXAMPLE:</span>
          <span className="text-foreground">319, 212, 6, 8, 100, 50</span>
          <span>{`# rewrite numbers with leading zero`}</span>
          <span className="text-foreground">319, 212, 006, 008, 100, 050</span>
          <span>{`# stable sort according to last digit (least significant digit)`}</span>
          <span className="text-foreground">
            10<span className="text-primary">0</span>, 05
            <span className="text-primary">0</span>, 21
            <span className="text-primary">2</span>, 00
            <span className="text-primary">6</span>, 00
            <span className="text-primary">8</span>, 31
            <span className="text-primary">9</span>
          </span>
          <span>{`# keep moving towards the most significant digit`}</span>
        </Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyradixsort} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
