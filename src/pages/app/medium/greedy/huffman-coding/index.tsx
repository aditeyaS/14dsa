import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Paragraph, PseudoCode, UL, LI, Paragraph2 } from "@/components/blocks";

import { hla, pseudo, pycodes } from "./code";

export default function HuffmanCoding() {
  return (
    <PageContainer pageTitle="Huffman Coding" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL className="mb-4">
          <LI>used for lossless compression</LI>
        </UL>
        <Paragraph2 className="underline">Example Problem</Paragraph2>
        <>
          <Paragraph>{`"abaabaa...<100 characters>"`}</Paragraph>
          <Paragraph>
            Has only 3 characters (a, b, c) with freq (70, 20, 10)
          </Paragraph>
        </>
        <UL className="mt-4">
          <LI>
            Variable length huffman coding
            <UL className="ml-8">
              <LI>
                <span className="underline">Greedy Idea:</span> most frequent
                character has smallest code
              </LI>
              <LI>
                <span className="underline">
                  Prefix requirement for decompression:
                </span>{" "}
                No code should be prefix of any other
              </LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <PseudoCode code={hla} text="High level idea" />
        <PseudoCode code={pseudo} />
      </SectionContainer>

      <SectionContainer>
        <PseudoCode text="Huffman code from root of BT" code={pycodes} />
      </SectionContainer>
    </PageContainer>
  );
}
