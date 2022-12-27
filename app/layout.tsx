import "./globals.css";
import { Lora } from "@next/font/google";
import { cn } from "#/lib/utils";
import { NextSeo } from "next-seo";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(lora.variable, "[color-scheme:dark]")}>
      <head>
        {/* Used to be added by default, now we need to add manually */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page.
        */}
        <NextSeo
          useAppDir={true}
          themeColor="#73fa97"
          titleTemplate="%s | Eindrasap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
