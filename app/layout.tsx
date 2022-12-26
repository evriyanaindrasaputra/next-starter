import "./globals.css";
import { Lora } from "@next/font/google";
import { cn } from "#/lib/utils";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(lora.variable, "[color-scheme:dark]")}>
      <head />
      <body>{children}</body>
    </html>
  );
}
