import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  LanguageSections,
  CodeBlock,
  OL,
  Paragraph,
  Alert,
  Complexity,
} from "@/components/blocks";
import { pybucketsort } from "./code";

export default function BucketSort() {
  return (
    <PageContainer pageTitle="Bucket Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph className="flex flex-col text-sm text-muted-foreground gap-1 mb-4">
          <span>Consider situation where we have</span>
          <span>1. numbers uniformly distributed in [0, 10^8)</span>
          <span>2. decimal numbers uniformly distributed in [0.0, 1.0)</span>
          <span>How to solve efficiently</span>
        </Paragraph>
        <UL>
          <LI>
            Assuming k ~ n
            <div>
              Best case: <Complexity complexity="O(n)" /> (Uniformly
              distributed)
            </div>
            <div>{`Worst case: All items in single bucket -> Depends on the sorting algo`}</div>
          </LI>
          <LI>
            Steps:
            <OL className="ml-8 text-base">
              <LI>Divide range in multiple buckets</LI>
              <LI>Put elements in appropriate bucket</LI>
              <LI>sort individual bucket</LI>
              <LI>Join them</LI>
            </OL>
          </LI>
        </UL>
        <Alert type={"Caution"}>
          Good only when data is uniformly distributed
        </Alert>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pybucketsort} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
