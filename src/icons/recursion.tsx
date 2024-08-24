import React from "react";

export const RecursionIcon: React.FC = () => {
  return (
    <svg className="h-24 w-24" viewBox="0 0 24 24" fill="none">
      <circle cx="6.5" cy="17.5" r="4" className="stroke-accent" />
      <line x1="6" y1="2.5" x2="22" y2="2.5" className="stroke-accent" />
      <line x1="21.5" y1="18" x2="21.5" y2="2" className="stroke-accent" />
      <path
        d="M5.64645 13.3536C5.84171 13.5488 6.15829 13.5488 6.35355 13.3536L9.53553 10.1716C9.7308 9.97631 9.7308 9.65973 9.53553 9.46447C9.34027 9.2692 9.02369 9.2692 8.82843 9.46447L6 12.2929L3.17157 9.46447C2.97631 9.2692 2.65973 9.2692 2.46447 9.46447C2.2692 9.65973 2.2692 9.97631 2.46447 10.1716L5.64645 13.3536ZM5.5 2L5.5 13H6.5L6.5 2H5.5Z"
        className="fill-accent"
      />
      <line x1="10" y1="17.5" x2="22" y2="17.5" className="stroke-accent" />
    </svg>
  );
};
