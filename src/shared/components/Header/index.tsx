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
    <header className="w-full h-16 flex justify-end items-center bg-transparent">
      <nav className=" mr-10 mt-1">
        {options.map(({ location, name }, index) => (
          <a
            key={index}
            href={location}
            className={`${
              selectedOption === name
                ? "text-secondary underline underline-offset-8"
                : "text-white hover:text-secondary"
            } px-4 py-3 text-md`}
            onClick={() => handleSelectOption(name)}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
