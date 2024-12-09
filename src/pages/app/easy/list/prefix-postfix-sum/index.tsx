import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { CodeBlock, Heading, LanguageSections } from "@/components/blocks";
import { pysumbwi } from "./code";

export default function PrePostSum() {
  return (
    <PageContainer pageTitle="Prefix/Postfix Sum" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>find sum of subarray between indexes</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysumbwi} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
