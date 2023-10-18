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
        "I value simple content structure, clean design patterns, and thoughtful interactions.",
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
        "I value simple content structure, clean design patterns, and thoughtful interactions.",
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
        "I value simple content structure, clean design patterns, and thoughtful interactions.",
      languages: "Javascript",
      frameworks: "NReact Native, Ionic",
    },
  ];

  return (
    <section id="stacks" className="bg-primary w-full pb-16 px-36 lg:px-48">
      <div className="w-full h-full grid gap-y-32 grid-rows-3 lg:grid-cols-3 lg:gap-x-4 lg:grid-rows-1">
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
