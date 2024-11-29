import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      style={{ display: visible ? "inline" : "none" }}
      className="bg-primary rounded-full z-50 p-1 fixed bottom-8 right-8 cursor-pointer drop-shadow"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
};
