import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { usePagination } from "@/hooks/use-pagination";
import Contributors from "../contributors";
import { Seo } from "../seo";
import { Button } from "../ui/button";

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
  const { previousRoute, nextRoute } = usePagination();
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
      <div className="flex justify-center items-center mb-6 gap-2">
        {previousRoute && (
          <Link to={previousRoute.path}>
            <Button variant={"outline"}>
              <ChevronLeft />
              {previousRoute.name}
            </Button>
          </Link>
        )}
        {/* <div className="flex-grow" /> */}
        {nextRoute && (
          <Link to={nextRoute.path}>
            <Button variant={"outline"}>
              {nextRoute.name}
              <ChevronRight />
            </Button>
          </Link>
        )}
      </div>
      {contributors && <Contributors githubUserNames={contributors} />}
    </div>
  );
}
