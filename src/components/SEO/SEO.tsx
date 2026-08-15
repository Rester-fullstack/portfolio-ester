import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
};

export default function SEO({
  title,
  description,
}: SEOProps) {
  useEffect(() => {
    // Título da página
    document.title = title;

    // Description
    let metaDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );

    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      "content",
      description
    );

    // Open Graph Title
    let ogTitle =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:title"]'
      );

    if (!ogTitle) {
      ogTitle =
        document.createElement("meta");

      ogTitle.setAttribute(
        "property",
        "og:title"
      );

      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute(
      "content",
      title
    );

    // Open Graph Description
    let ogDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:description"]'
      );

    if (!ogDescription) {
      ogDescription =
        document.createElement("meta");

      ogDescription.setAttribute(
        "property",
        "og:description"
      );

      document.head.appendChild(
        ogDescription
      );
    }

    ogDescription.setAttribute(
      "content",
      description
    );
  }, [title, description]);

  return null;
}