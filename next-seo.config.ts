// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Next Starter",
  description: "Next Starter Eindrasap",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://next-starter.init.my.id/",
    title: "Next Starter Eindrasap",
    description: "Next Starter template typescript tailwind",
    images: [
      {
        url: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt A",
        type: "image/jpeg",
        secureUrl:
          "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
      },
    ],
    siteName: "eindrasap-next-starter",
  },
  twitter: {
    handle: "@handlea",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};
