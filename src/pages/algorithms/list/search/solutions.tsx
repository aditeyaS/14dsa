import {
  H1,
  PageSectionContainer,
  Section,
  SolutionBlock2,
} from "../../../../components";

export const Solutions = () => {
  return (
    <PageSectionContainer>
      <H1>Common solutions</H1>
      <Section>
        <SolutionBlock2
          title="Search in sorted rotated array"
          folder="list"
          file="bs_rotated"
        />
        <SolutionBlock2
          title="Median of 2 sorted array"
          folder="list"
          file="median_sorted_arrays"
        />
      </Section>
    </PageSectionContainer>
  );
};
