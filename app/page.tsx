import Image from "next/image";
import { cn } from "#/lib/utils";
import { AiFillGithub } from "react-icons/ai";
import { SiVercel } from "react-icons/si";

export default function Home() {
  return (
    <section>
      <main className="mx-auto flex max-w-5xl flex-col gap-3  px-2 pt-20 md:gap-5 md:px-1">
        <h1 className="text-center text-4xl font-bold tracking-wider text-emerald-400 sm:text-6xl">
          Welcome to Next-Starter
        </h1>
        <p className={cn("px-1 text-center text-sm md:text-lg")}>
          This is just a starter template, made using Next.js App Dir{" "}
          <span className="font-semibold text-yellow-200">(exprimental)</span> +
          Typescript + Tailwind CSS.
        </p>
        <figure className="my-4 flex content-center justify-center py-3">
          <Image
            src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
            alt="Next.jsLogo"
            width={200}
            height={200}
          />
        </figure>
        <code
          className={cn(
            "bg-gray-200 ",
            "rounded-lg p-4",
            "text-center text-sm text-gray-700 selection:bg-emerald-400 md:text-base"
          )}
        >
          npx create-next-app --example
          https://github.com/evriyanaindrasaputra/next-starter
          &lt;YOUR_APP_NAME&gt;
        </code>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          <a
            href="https://github.com/evriyanaindrasaputra/next-starter"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center",
              "bg-gray-700 hover:bg-gray-400",
              "rounded-lg px-4 py-2",
              "font-semibold ",
              "shadow-sm",
              "gap-2"
            )}
          >
            <AiFillGithub size={20} />
            <span>Open in Github</span>
          </a>
          <a
            href="https://vercel.com/import/git?s=https://github.com/evriyanaindrasaputra/next-starter"
            className={cn(
              "flex items-center justify-center",
              "bg-blue-600 hover:bg-blue-400",
              "rounded-lg px-4 py-2",
              "shadow-sm",
              "gap-2"
            )}
          >
            <SiVercel size={20} />
            <span>Deploy To Vercel</span>
          </a>
        </div>
      </main>
    </section>
  );
}
