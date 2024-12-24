type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export const Seo = ({
  title = "",
  description = "",
  keywords = [],
}: SeoProps = {}) => {
  const formattedKeywords = keywords.join(", ");

  return (
    <>
      <title>{title ? `${title} | 14dsa` : "14dsa"}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Data structures, dsa, ${formattedKeywords}`}
      />
    </>
  );
};
