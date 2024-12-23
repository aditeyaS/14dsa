import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  LanguageSections,
  CodeBlock,
  Heading,
  OL,
  Complexity,
  SpaceTimeComplexity,
} from "@/components/blocks";
import { pykmp, pylps } from "./code";
import LPS1Img from "./lps-1-img";

export default function KMP() {
  return (
    <PageContainer
      pageTitle="Knuth Morris Pratt Algorithm"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <UL>
          <LI>Pattern matching algo</LI>
          <LI>
            2 parts:
            <UL className="ml-8">
              <LI>LPS</LI>
              <LI>Pattern match</LI>
            </UL>
          </LI>
          <LI>
            <SpaceTimeComplexity
              time="O(N)"
              timeLevel={3}
              space="O(M)"
              spaceLevel={3}
            />
          </LI>
          <LI>
            Prefix suffix
            <UL className="ml-8">
              <LI>
                Eg "abc"
                <UL className="ml-8">
                  <LI>Proper prefix=["", "a", "ab"]</LI>
                  <LI>suffix = ["", "c", "bc", "abc"]</LI>
                </UL>
              </LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>LPS</Heading>
        <UL>
          <LI>Longest prefix suffix</LI>
          <LI>
            Time: <Complexity complexity="O(n)" level={3} />
          </LI>
          <LI>
            Examples:
            <OL className="ml-8">
              <LI>s = "ababc"; lps = [0, 0, 1, 2, 0]</LI>
              <LI>s = "aaaa"; lps = [0, 1, 2, 3]</LI>
              <LI>s = "abacabad"; lps = [0, 0, 1, 0, 1, 2, 3, 0]</LI>
            </OL>
          </LI>
          <LI>
            Basic Idea: (len = lps[i-1])
            <UL className="ml-8">
              <LI>
                if str[len] == str[i], then lps[i] = len + 1
                <LPS1Img />
              </LI>
              <LI>
                if str[len] != str[i]
                <UL className="ml-8">
                  <LI>if len == 0, then lps[i] = 0</LI>
                  <LI>else, len = lps[len - 1], compare str[i] and str[len]</LI>
                </UL>
              </LI>
            </UL>
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pylps} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>KMP</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pykmp} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
