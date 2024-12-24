import React, { useEffect } from "react";
import Contributors from "../contributors";
import { Seo } from "../seo";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle?: string;
  seoDescription?: string;
  contributors?: string[];
}

export default function PageContainer({
  pageTitle,
  seoDescription,
  contributors,
  ...props
}: PageContainerProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="p-4 flex flex-col w-full">
      <Seo title={pageTitle} description={seoDescription} />
      {pageTitle && (
        <div className="flex justify-center w-full text-primary py-6">
          <h1 className="text-6xl">{pageTitle}</h1>
        </div>
      )}
      <div className="flex flex-col gap-6 py-6" {...props} />
      {contributors && <Contributors githubUserNames={contributors} />}
    </div>
  );
}
