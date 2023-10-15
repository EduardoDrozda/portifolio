"use client";

import Image from "next/image";
import { Timeline } from "..";

export function Career() {
  const years = [
    "2017 - 2018",
    "2018 - 2019",
    "2019 - 2020",
    "2020 - 2020",
    "2020-2022",
    "2022 - Present",
  ];

  function handleJob(v: string) {
    console.log(v);
  }

  return (
    <section
      id="career"
      className="bg-primary w-full h-full py-20 flex flex-col justify-center items-center"
    >
      <Image src="/images/uds.png" width={300} height={100} alt="" />
      <div className="mt-16 px-32">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet urna id diam ultrices convallis et non ligula. Mauris varius
          libero quis erat euismod, vel vestibulum erat aliquet. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin sit amet urna id
          diam ultrices convallis et non ligula. Mauris varius libero quis erat
          euismod, vel vestibulum erat aliquet.
        </p>

        <h1 className="my-16 text-center text-2xl font-bold">What I used</h1>

        <ul className="text-center">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        <div className="mt-10 w-full">
          <Timeline onClick={handleJob} years={years} />
        </div>
      </div>
    </section>
  );
}
