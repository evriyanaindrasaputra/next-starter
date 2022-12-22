import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="p-3 px-2 text-3xl text-red-500 sm:pt-2">Hello World</h1>
    </main>
  );
}
