import { Stack } from "@shared/shared/types";
import Image from "next/image";

type Props = Stack;

export function StackCard({
  image,
  title,
  description,
  languages,
  frameworks,
}: Props) {
  return (
    <div className="w-full bg-background rounded-md shadow-md -mt-28 py-10 px-10 grid grid-rows-5 justify-items-center text-center">
      <Image src={image.src} alt={image.alt} width={90} height={90} />

      <span className="text-black font-black text-2xl mt-5">{title}</span>

      <p className="text-black font-light text-md">{description}</p>

      <div className="flex flex-col">
        <span className="text-secondary font-light text-md">
          Languages I speak:
        </span>
        <span className="text-black font-light text-md mt-3">{languages}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-secondary font-light text-md">
          Frameworks:
        </span>
        <span className="text-black font-light text-md mt-3">{frameworks}</span>
      </div>
    </div>
  );
}
