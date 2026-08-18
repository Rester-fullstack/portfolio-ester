import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

const SITE_URL =
  "https://portfolio-ester-one.vercel.app";

export default function SEO({
  title,
  description,
  path = "/",
}: SEOProps) {
  useEffect(() => {
    const normalizedPath =
      path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

    const canonicalUrl =
      `${SITE_URL}${normalizedPath}`;

    // TITLE
    document.title = title;

    // DESCRIPTION
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

    // CANONICAL
    let canonical =
      document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      "href",
      canonicalUrl
    );

    // OPEN GRAPH TITLE
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

      document.head.appendChild(
        ogTitle
      );
    }

    ogTitle.setAttribute(
      "content",
      title
    );

    // OPEN GRAPH DESCRIPTION
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

    // OPEN GRAPH URL
    let ogUrl =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:url"]'
      );

    if (!ogUrl) {
      ogUrl =
        document.createElement("meta");

      ogUrl.setAttribute(
        "property",
        "og:url"
      );

      document.head.appendChild(
        ogUrl
      );
    }

    ogUrl.setAttribute(
      "content",
      canonicalUrl
    );

  }, [title, description, path]);

  return null;
}