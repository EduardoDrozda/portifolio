import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader } from "..";

type Props = {
  isLoading: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ isLoading, children, ...rest }: Props) {
  return (
    <button
      disabled={isLoading}
      className={`${
        !isLoading
          ? "bg-primary text-white hover:bg-primary_light active:bg-primary"
          : "bg-gray-300 text-black"
      } py-2 px-4 rounded-md w-full md:w-1/4 focus:outline-none`}
      {...rest}
    >
      <div className=" w-full flex justify-center items-center gap-x-2">
        {isLoading && <Loader />}
        {children}
      </div>
    </button>
  );
}
