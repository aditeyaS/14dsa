import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "../../components";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <H1>DSA in python</H1>
      <span>Under development</span>
      <Link to="/dashboard" className="bg-primary rounded-xl px-4 py-2">
        Explore DSA
      </Link>
    </div>
  );
};

export default Landing;
