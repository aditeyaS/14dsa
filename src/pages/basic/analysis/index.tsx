import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { SingleComplexity } from "@/components/complexity";
import DataStructureOpTable from "./data-structure-op-table";
import Chart from "./chart";

export default function Analysis() {
  return (
    <PageContainer pageTitle="Analysis" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Order of growth</Heading>
        <Paragraph>{`c < log(log n) < log n < n^1/3 < n^1/2 < n < n^2 < n^3 < n^4 < 2^n < n^n`}</Paragraph>
        <div>
          <Chart />
          <div className="flex">
            <SingleComplexity complexity="Horrible" variant={"horrible"} />
            <SingleComplexity complexity="Bad" variant={"bad"} />
            <SingleComplexity complexity="Fair" variant={"fair"} />
            <SingleComplexity complexity="Good" variant={"good"} />
            <SingleComplexity complexity="Excellent" />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <Heading>Big O</Heading>
        <UL>
          <LI>
            {`We say f(n)=O(g(n)) iff there exists constants c and n0 such that f(n)<=cg(n) for all n>=n0`}
          </LI>
          <LI>
            {`{n/4, 2n + 3, ..., n/100000, log(n) + 100} ∈ O(n) (equal or less)`}
          </LI>
          <LI>Upper bound</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Omega</Heading>
        <UL>
          <LI>
            {`f(n) = Ω(g(n)) iff there exists positive constants c and n0 such that 0<=cg(n)<=f(n) for all n>=n0`}
          </LI>
          <LI>{`{n/4, n^2,..., n^n} ∈ Ω(n)`}</LI>
          <LI>{`useful when we have lower bound`}</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <UL>
          <LI>{`f(n)=θ(g(n)) iff there exist constants c1, c2 (where c1>0 and c2>0) and n0 (where n0>=0) such that c1g(n) <= f(n) <= c2g(n) for all n>=n0`}</LI>
          <LI>Exact bound</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Space Complexity</Heading>
        <UL>
          <LI>
            Auxiallary space: Order of growth of extra space (space other than
            i/o)
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Common Data Structure Operations</Heading>
        <DataStructureOpTable />
      </SectionContainer>
      <div>refer https://www.bigocheatsheet.com/</div>
    </PageContainer>
  );
}
