import React from "react";

export const MatrixIcon: React.FC = () => {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" className="stroke-primary" />
      <line x1="8.5" y1="3" x2="8.5" y2="21" className="stroke-primary" />
      <line x1="16.5" y1="3" x2="16.5" y2="21" className="stroke-primary" />
      <line x1="3" y1="15.5" x2="21" y2="15.5" className="stroke-primary" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" className="stroke-primary" />
    </svg>
  );
};
