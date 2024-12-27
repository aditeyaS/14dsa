import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Paragraph,
  Heading2,
  LanguageSections,
  CodeBlock,
  PseudoCode,
  Complexity,
} from "@/components/blocks";
import ExIOImage from "./ex-io-image";
import { pseudo, pysol } from "./code";

export default function FractionalKnapsack() {
  return (
    <PageContainer pageTitle="Fractional Knapsack" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2 className="underline">Problem</Heading2>
        <>
          <Paragraph>
            We are given a set of items, their weights and values.
          </Paragraph>
          <Paragraph> We have a knapsack (bag) of given capacity.</Paragraph>
          <Paragraph>
            Our target is to collect max value in the knapsack. We can pick
            items partially (that is why it's called fractional)
          </Paragraph>
          <ExIOImage />
          <Paragraph className="text-muted-foreground">
            500 + 400 + (20/50*600) = 1410
          </Paragraph>
        </>
      </SectionContainer>
      <SectionContainer>
        <Paragraph>
          Time: <Complexity complexity="O(nlogn)" level={3} />
        </Paragraph>
        <PseudoCode code={pseudo} />
      </SectionContainer>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pysol} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
