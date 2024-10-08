import React from "react";

export const GraphIcon: React.FC = () => {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <line
        x1="2.71327"
        y1="10.5904"
        x2="12.7133"
        y2="3.59038"
        className="stroke-primary"
      />
      <line
        x1="12.3293"
        y1="3.62371"
        x2="20.3293"
        y2="10.6237"
        className="stroke-primary"
      />
      <line x1="3.5" y1="10" x2="3.5" y2="21" className="stroke-primary" />
      <line x1="20.5" y1="10" x2="20.5" y2="21" className="stroke-primary" />
      <line x1="3" y1="20.5" x2="21" y2="20.5" className="stroke-primary" />
      <circle cx="12.5" cy="3.5" r="1.5" className="fill-primary" />
      <circle cx="3.5" cy="20.5" r="1.5" className="fill-primary" />
      <line
        x1="3.25351"
        y1="10.569"
        x2="20.2535"
        y2="20.569"
        className="stroke-primary"
      />
      <circle cx="20.5" cy="20.5" r="1.5" className="fill-primary" />
      <line x1="3" y1="10.5" x2="21" y2="10.5" className="stroke-primary" />
      <circle cx="3.5" cy="10.5" r="1.5" className="fill-primary" />
      <circle cx="20.5" cy="10.5" r="1.5" className="fill-primary" />
    </svg>
  );
};
