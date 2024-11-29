import { Helmet, HelmetData } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Seo = ({ title = "", description = "" }: SeoProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | 14dsa` : undefined}
      defaultTitle="14dsa"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
