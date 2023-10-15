import Image from "next/image";
import { Header } from "..";

export function Home() {
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
            <div className="flex flex-1">
              <Image
                src="/images/github.png"
                width={30}
                height={30}
                alt="Github Icon to redirect github page"
                className="cursor-pointer hover:scale-125"
              />

              <Image
                src="/images/linkedin.png"
                width={30}
                height={30}
                alt="Linkedin Icon to redirect github page"
                className="mx-4 cursor-pointer hover:scale-125"
              />

              <Image
                src="/images/file.png"
                width={30}
                height={30}
                alt="File Icon to to download cv"
                className="cursor-pointer hover:scale-125"
              />
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
