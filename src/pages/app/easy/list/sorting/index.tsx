import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Alert,
  Heading,
  Paragraph,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pysortobjects, pysort } from "./code";

export default function Sorting() {
  return (
    <PageContainer pageTitle="Sorting" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>
            Stability in sorting: Order of occurrence is maintained when values
            are same
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <UL>
                <LI>sort() and sorted() are stable</LI>
                <LI>both use Tim Sort (Merge + Insertion) internally</LI>
              </UL>
              <CodeBlock language={"python"} code={pysort} />
              <Alert type="Important">
                <Paragraph>
                  sort() only works for array and sorted() works for any
                  iterable
                </Paragraph>
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Objects</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pysortobjects} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
