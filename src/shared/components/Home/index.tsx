"use client";

import { LinkEnum } from "@shared/shared/enums";
import Image from "next/image";
import { Header } from "..";

type ExternalContent = {
  image: string;
  alt: string;
  link: LinkEnum;
  isAnchor?: boolean;
};

export function Home() {
  const externalContents: ExternalContent[] = [
    {
      image: "/images/linkedin.png",
      link: LinkEnum.LINKEDIN,
      alt: "Github Icon to redirect github page",
      isAnchor: true,
    },
    {
      image: "/images/github.png",
      link: LinkEnum.GITHUB,
      alt: "Linkedin Icon to redirect github page",
      isAnchor: true,
    },
    {
      image: "/images/file.png",
      link: LinkEnum.GITHUB,
      alt: "File Icon to to download cv",
    },
  ];

  function handleExternalLink(link: string) {
    window.open(link, "__blank");
  }

  return (
    <section className="w-screen h-screen relative" id="#">
      <Image
        src="/images/header.gif"
        alt="Mario coding image"
        className="absolute w-screen h-full object-cover brightness-50 -z-50"
        width={0}
        height={0}
      />
      <div className="sm:block hidden">
        <Header />
      </div>
      <div className="w-screen h-full flex flex-1 justify-center items-center">
        <div className=" flex flex-col">
          <div className="flex flex-col-reverse justify-center gap-3 items-center sm:flex-row sm:justify-start">
            <div className="flex items-center">
              <span className="text-md text-left mr-3">
                HI 👋 I&apos;M EDUARDO DROZDA
              </span>
            </div>
            <div className="flex flex-1 gap-x-5">
              {externalContents.map(({ image, link, alt, isAnchor }, index) =>
                isAnchor ? (
                  <a key={index} href={link} target="_blank">
                    <Image
                      src={image}
                      width={30}
                      height={30}
                      alt={alt}
                      className="cursor-pointer hover:scale-125 hover:opacity-70"
                    />
                  </a>
                ) : (
                  <Image
                    src={image}
                    width={30}
                    height={30}
                    alt={alt}
                    className="cursor-pointer hover:scale-125 hover:opacity-70"
                    onClick={() => handleExternalLink(link)}
                    key={index}
                  />
                )
              )}
            </div>
          </div>
          <span className="text-5xl font-bold mt-2 text-center">
            SOFTWARE ENGINEER
          </span>
          <span className="text-md text-center sm:text-right">
            SEVEN YEARS BUILDING SOLUTIONS
          </span>
        </div>
      </div>
    </section>
  );
}
