import React from "react";
import {
  H2,
  LI,
  PageSectionContainer,
  Section,
  SolutionBlock2,
  UL,
} from "../../../../components";

const Intro: React.FC = () => {
  return (
    <PageSectionContainer>
      <Section>
        <H2>Sliding window</H2>
        <UL>
          <LI>
            problems that involve defining a window or range in the input data
            (arrays or strings) and then moving that window across the data to
            perform some operation within the window
          </LI>
          <LI>The window can be of fixed or variable length</LI>
          <LI>
            {`depending on the use case there are multiple ways to create window ->
            d = deque(); with one variable for sum etc.`}
          </LI>
        </UL>
        <SolutionBlock2
          title="Max sum of k consecutive elements"
          folder="list"
          file="max_k_sum"
        />
        <SolutionBlock2
          title="Subarray with given sum"
          folder="list"
          file="sub_array_with_given_sum"
        />
      </Section>
      <Section>
        <H2>2 pointer</H2>
        <UL>
          <LI>
            2 pointers are used - left & right, slow & fast depending on the
            situation
          </LI>
        </UL>
        <SolutionBlock2
          title="Find if there is a pair with sum x in sorted array"
          folder="list"
          file="pair_sum_x"
        />
      </Section>
      <Section>
        <H2>Prefix/Postfix sum</H2>
        <UL>
          <LI>Used for searching in sorted array</LI>
        </UL>
        <SolutionBlock2
          title="find sum of subarray between indexes"
          folder="list"
          file="sum_between_indexes"
        />
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
