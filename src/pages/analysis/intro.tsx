import React from "react";
import { PageHeading } from "../../components";

export const Intro: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <PageHeading>Order of growth</PageHeading>
      <span className="text-2xl">
        {
          "c  <  log(logn) < logn < n^1/3 < n^1/2 < n < n^2 < n^3 < n^4 < 2^n < n^n"
        }
      </span>
      <PageHeading>Big O</PageHeading>
      <ul>
        <li>
          {
            "We say f(n)=O(g(n)) iff there exists constants c and n0 such that f(n)<=cg(n) for all n>=n0"
          }
        </li>
        <li>
          {"{n/4, 2n + 3, ..., n/100000, log(n) + 100} ∈ O(n) (equal or less)"}
        </li>
        <li>{"Upper bound"}</li>
      </ul>
      <PageHeading>Omega</PageHeading>
      <ul>
        <li>
          {
            "f(n) = Ω(g(n)) iff there exists positive constants c and n0 such that 0<=cg(n)<=f(n) for all n>=n0"
          }
        </li>
        <li>{"{n/4, n^2,..., n^n} ∈ Ω(n)"}</li>
        <li>{"useful when we have lower bound"}</li>
      </ul>
      <PageHeading>Theta</PageHeading>
      <ul>
        <li>
          {
            "f(n)=θ(g(n)) iff there exist constants c1, c2 (where c1>0 and c2>0) and n0 (where n0>=0) such that c1g(n) <= f(n) <= c2g(n) for all n>=n0"
          }
        </li>
        <li>{"Exact bound"}</li>
      </ul>
    </div>
  );
};
