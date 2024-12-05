import { Helmet, HelmetData } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

const helmetData = new HelmetData({});

export const Seo = ({
  title = "",
  description = "",
  keywords = [],
}: SeoProps = {}) => {
  const formattedKeywords = keywords.join(", ");

  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | 14dsa` : undefined}
      defaultTitle="14dsa"
    >
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Data structures, dsa, ${formattedKeywords}`}
      />
    </Helmet>
  );
};
