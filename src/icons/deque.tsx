import React from "react";

export const DequeIcon: React.FC = () => {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="15" width="4" height="4" className="fill-primary" />
      <rect x="15" y="5" width="4" height="4" className="fill-primary" />
      <rect x="10" y="10" width="4" height="4" className="fill-primary" />
      <line
        x1="7.72265"
        y1="15.584"
        x2="10.7226"
        y2="13.584"
        className="stroke-primary"
      />
      <line
        x1="12.7226"
        y1="10.584"
        x2="15.7226"
        y2="8.58397"
        className="stroke-primary"
      />
      <line
        x1="16.6464"
        y1="6.64645"
        x2="20.6464"
        y2="2.64645"
        className="stroke-primary"
      />
      <line
        x1="2.64645"
        y1="21.6464"
        x2="6.64645"
        y2="17.6464"
        className="stroke-primary"
      />
      <path d="M3 19L4.73205 22H1.26795L3 19Z" className="fill-primary" />
      <path
        d="M22.1907 1.364L21.4115 4.73931L18.878 2.3768L22.1907 1.364Z"
        className="fill-primary"
      />
    </svg>
  );
};
