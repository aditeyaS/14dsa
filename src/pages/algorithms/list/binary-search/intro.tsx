import React, { useEffect, useState } from "react";
import {
  CodeBlock,
  Complexity,
  LI,
  PageSectionContainer,
  Section,
  UL,
} from "../../../../components";
import ApiClient from "../../../../lib/api-client";

const Intro: React.FC = () => {
  const apiClient = new ApiClient();
  const [binarySearch, setBinarySearch] = useState<string>("");

  useEffect(() => {
    fetchBinarySearch();
  }, []);

  const fetchBinarySearch = async () => {
    try {
      const data = await apiClient.getCode(
        "algorithms/list/binary-search/binary_search.py"
      );
      setBinarySearch(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <PageSectionContainer>
      <Section>
        <UL>
          <LI>Used for searching in sorted array</LI>
          <LI>
            <Complexity time="O(log n)" space="O(1)" />
          </LI>
        </UL>
        <CodeBlock>{binarySearch}</CodeBlock>
      </Section>
    </PageSectionContainer>
  );
};

export default Intro;
