import React from "react";

export const DoublyLinkedListIcon: React.FC = () => {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="16" width="6" height="6" className="fill-primary" />
      <rect x="16" y="2" width="6" height="6" className="fill-primary" />
      <line
        x1="20.3561"
        y1="7.35073"
        x2="9.22133"
        y2="18.6641"
        className="stroke-primary"
      />
      <path
        d="M10.5267 19.2392L8.00616 19.8693L8.72071 17.3714L10.5267 19.2392Z"
        className="fill-primary"
      />
      <line
        x1="3.53327"
        y1="16.3405"
        x2="14.6831"
        y2="5.04202"
        className="stroke-primary"
      />
      <path
        d="M13.3783 4.4652L15.8997 3.83843L15.1818 6.33535L13.3783 4.4652Z"
        className="fill-primary"
      />
    </svg>
  );
};
