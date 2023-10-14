"use client";

import { useCallback, useState } from "react";

type HeaderOptions = {
  name: string;
  location: string;
};

export function Header() {
  const [selectedOption, setSelectedOption] = useState<string>("Home");

  const options: HeaderOptions[] = [
    {
      name: "Home",
      location: "#",
    },
    {
      name: "About",
      location: "#about",
    },
    {
      name: "Intro",
      location: "#intro",
    },
    {
      name: "Career",
      location: "#career",
    },
    {
      name: "Stacks",
      location: "#stacks",
    },
    {
      name: "Projects",
      location: "#my-projects",
    },
    {
      name: "Contact",
      location: "#contact",
    },
  ];

  const handleSelectOption = useCallback((v: string) => {
    setSelectedOption(v);
  }, []);

  return (
    <header className="w-full h-16 flex justify-end items-center">
      <nav className=" pr-16 mt-10">
        {options.map(({ location, name }, index) => (
          <a
            key={index}
            href={location}
            // className="text-white hover:text-secondary hover:underline px-4 py-2"
            // className={`text-white hover:text-secondary hover:underline hover:underline-offset-8 px-4 py-2`}
            className={`${
              selectedOption === name
                ? "text-secondary underline underline-offset-8"
                : "text-white hover:text-secondary"
            } px-4 py-2`}
            onClick={() => handleSelectOption(name)}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
