"use client";

import { useCallback, useState } from "react";

type HeaderOptions = {
  name: string;
  id: string;
};

export function Header() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options: HeaderOptions[] = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Stacks",
      id: "stacks",
    },
    {
      name: "Projects",
      id: "my-projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const handleSelectOption = useCallback(({ id, name }: HeaderOptions) => {
    scrollToView(id);
    setSelectedOption(name);
  }, []);

  function scrollToView(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  return (
    <header className="w-full h-16 flex justify-end items-center bg-transparent">
      <nav className=" mr-10 mt-1">
        {options.map((option, index) => (
          <a
            key={index}
            data-id={option.id}
            className={`${
              selectedOption === option.name
                ? "text-secondary font-bold"
                : "text-white hover:text-secondary"
            } px-4 py-3 text-md transition cursor-pointer`}
            onClick={() => handleSelectOption(option)}
          >
            {option.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
