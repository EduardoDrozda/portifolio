"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  years: string[];
  onClick: (v: string) => void;
};

export function Timeline({ years, onClick }: Props) {
  const [seletedTime, setSelectedTime] = useState<string>("");

  function handleTime(v: string) {
    setSelectedTime(v);
    onClick(v);
  }

  return (
    <div className="flex justify-center items-center">
      {years.map((year, index) => (
        <div className="flex" key={index}>
          <span
            className={`
            text-xl cursor-pointer hover:text-secondary
            ${seletedTime === year ? "text-secondary" : "text-white"}
            `}
            onClick={() => handleTime(year)}
          >
            {year}
          </span>
          {index + 1 < years.length && (
            <Image
              className="mx-3"
              src="/images/right-arrow.png"
              width={30}
              height={30}
              alt="arrow pointed to right"
            />
          )}
        </div>
      ))}
    </div>
  );
}
