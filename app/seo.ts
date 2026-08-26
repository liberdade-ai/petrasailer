import type { Metadata } from "next";

export const SITE_URL = "https://petrasailer.com";
export const SITE_NAME = "Petra Sailer – Dem Eigenen folgen";
export const PERSON_ID = `${SITE_URL}/#petra-sailer`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOCIAL_IMAGE = `${SITE_URL}/og.png`;
export const HOME_SOCIAL_IMAGE = `${SITE_URL}/home-og.png`;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  socialImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

type Breadcrumb = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  socialImage = {
    url: SOCIAL_IMAGE,
    width: 1536,
    height: 1024,
    alt: "Petra Sailer – Dem Eigenen folgen",
  },
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title === "Dem Eigenen folgen" ? SITE_NAME : `${title} | Petra Sailer`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          ...socialImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Petra Sailer",
      url: SITE_URL,
      image: absoluteUrl("/petra-sailer-portrait.jpg"),
      email: "kontakt@petrasailer.com",
      telephone: "+49 1515 5348727",
      jobTitle: "Coach für Lebensgestaltung",
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "de-DE",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

function breadcrumbGraph(items: Breadcrumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageGraph({
  path,
  name,
  description,
  type = "WebPage",
  breadcrumbs,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  breadcrumbs?: Breadcrumb[];
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "de-DE",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
      },
      ...(breadcrumbs ? [breadcrumbGraph(breadcrumbs)] : []),
    ],
  };
}

export function serviceGraph({
  path,
  name,
  description,
  serviceType,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "de-DE",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        serviceType,
        url,
        provider: { "@id": PERSON_ID },
      },
      breadcrumbGraph([
        { name: "Startseite", path: "/" },
        { name, path },
      ]),
    ],
  };
}

export function faqGraph(entries: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
