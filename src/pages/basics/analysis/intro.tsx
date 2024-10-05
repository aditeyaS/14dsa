import React from "react";
import {
  H2,
  LI,
  PageSectionContainer,
  Section,
  TEXT,
  UL,
} from "../../../components";
import { Chart } from "react-google-charts";
import { useTheme } from "../../../components/theme-provider";

const chartData = [
  ["n", "c", "log(log n)", "log n", "n^1/3", "n^1/2", "n", "n^2"],
  [10, 1, 0.83, 2.3, 2.15, 3.16, 10, 100],
  [110, 1, 1.55, 4.7, 4.79, 10.49, 110, 12100],
  [210, 1, 1.68, 5.35, 5.94, 14.49, 210, 44100],
  [310, 1, 1.75, 5.74, 6.77, 17.61, 310, 96100],
  [410, 1, 1.79, 6.02, 7.43, 20.25, 410, 168100],
  [510, 1, 1.83, 6.23, 7.99, 22.58, 510, 260100],
  [610, 1, 1.86, 6.41, 8.48, 24.7, 610, 372100],
  [710, 1, 1.88, 6.56, 8.92, 26.65, 710, 504100],
  [810, 1, 1.9, 6.7, 9.32, 28.46, 810, 656100],
  [910, 1, 1.92, 6.81, 9.69, 30.17, 910, 828100],
  [1010, 1, 1.93, 6.92, 10.03, 31.78, 1010, 1020100],
];

export const Intro: React.FC = () => {
  const { theme } = useTheme();
  const options = {
    vAxis: { logScale: true, textPosition: "none" },
    hAxis: { textPosition: "none" },
    series: {
      0: { color: "#e2431e" },
      1: { color: "#e7711b" },
      2: { color: "#f1ca3a" },
      3: { color: "#6f9654" },
      4: { color: "#1c91c0" },
      5: { color: "#43459d" },
      6: { color: "#c0c0c0" },
      7: { color: "#666666" },
      8: { color: "#b36b6b" },
    },
    legend: { position: "bottom" },
    backgroundColor: theme === "dark" ? "#000" : "#fff",
    explorer: {
      actions: ["dragToZoom", "rightClickToReset"],
      axis: "horizontal",
      keepInBounds: true,
      maxZoomIn: 0.1,
    },
  };
  return (
    <PageSectionContainer>
      <Section>
        <H2>Order of growth</H2>
        <TEXT>
          {
            "c < log(log n) < log n < n^1/3 < n^1/2 < n < n^2 < n^3 < n^4 < 2^n < n^n"
          }
        </TEXT>
      </Section>
      <Chart
        chartType="LineChart"
        data={chartData}
        height="50vh"
        width="100%"
        options={options}
      />
      <Section>
        <H2>Big O</H2>
        <UL>
          <LI>
            {
              "We say f(n)=O(g(n)) iff there exists constants c and n0 such that f(n)<=cg(n) for all n>=n0"
            }
          </LI>
          <LI>
            {
              "{n/4, 2n + 3, ..., n/100000, log(n) + 100} ∈ O(n) (equal or less)"
            }
          </LI>
          <LI>Upper bound</LI>
        </UL>
      </Section>
      <Section>
        <H2>Omega</H2>
        <UL>
          <LI>
            {
              "f(n) = Ω(g(n)) iff there exists positive constants c and n0 such that 0<=cg(n)<=f(n) for all n>=n0"
            }
          </LI>
          <LI>{"{n/4, n^2,..., n^n} ∈ Ω(n)"}</LI>
          <LI>useful when we have lower bound</LI>
        </UL>
      </Section>

      <Section>
        <H2>Theta</H2>
        <UL>
          <LI>
            {
              "f(n)=θ(g(n)) iff there exist constants c1, c2 (where c1>0 and c2>0) and n0 (where n0>=0) such that c1g(n) <= f(n) <= c2g(n) for all n>=n0"
            }
          </LI>
          <LI>Exact bound</LI>
        </UL>
      </Section>
      <Section>
        <H2>Space Complexity</H2>
        <UL>
          <LI>
            Auxiallary space: Order of growth of extra space (space other than
            i/o)
          </LI>
        </UL>
      </Section>
    </PageSectionContainer>
  );
};
