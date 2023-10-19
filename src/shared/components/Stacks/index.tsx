import { Stack } from "@shared/shared/types";
import { StackCard } from "../StackCard";

export function Stacks() {
  const stacks: Stack[] = [
    {
      image: {
        src: "/svgs/html.svg",
        alt: "Icon of HTML 5",
      },
      title: "Front-end",
      description:
        "Desenvolvo interfaces web aderindo aos mais elevados padrões de qualidade e excelência na experiência do usuário.",
      languages: "HTML, Javascript, CSS, SASS",
      frameworks: "Angular, React, React Native",
    },
    {
      image: {
        src: "/svgs/backend.svg",
        alt: "Icon of backend",
      },
      title: "Back-end",
      description:
        "Desenvolvo sistemas seguros e escaláveis, aderindo aos mais altos padrões de qualidade, incluindo clean code e design patterns, assegurando excelência técnica.",
      languages: "Javascript, PHP, C#",
      frameworks:
        "Node JS, Express, Nest JS, Laravel, .NET, MySQL, Postgres, Docker, Docker Compose",
    },
    {
      image: {
        src: "/svgs/mobile.svg",
        alt: "Icon of cellphone",
      },
      title: "Mobile",
      description:
        "Crio interfaces móveis variadas, abrangendo desde aplicações simples até sistemas complexos, utilizando tecnologias avançadas.",
      languages: "Javascript",
      frameworks: "React Native, Ionic",
    },
  ];

  return (
    <section id="stacks" className="bg-primary w-full pb-16 px-5 md:px-48">
      <div className="w-full h-full grid gap-y-32 grid-rows-3 md:grid-cols-3 md:gap-x-4 md:grid-rows-1">
        {stacks.map(
          ({ image, title, description, languages, frameworks }, index) => (
            <StackCard
              key={index}
              image={image}
              title={title}
              languages={languages}
              frameworks={frameworks}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
}
