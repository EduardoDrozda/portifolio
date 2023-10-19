import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
  textarea?: boolean;
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement>;

export function Input({ label, textarea, invalid, ...rest }: Props) {
  const className = `border border-gray-300 ${
    invalid
      ? "border-red-500"
      : "focus:border-secondary"
  } rounded-md px-4 py-2 w-full focus:outline-none text-sm text-gray-700`;

  return (
    <div
      className="w-full h-full flex flex-col gap-y-2
    "
    >
      <label className=" text-gray-700 text-sm font-bold" htmlFor="input">
        {label}
      </label>
      {textarea ? (
        <textarea className={className} {...rest} />
      ) : (
        <input className={className} {...rest} />
      )}
    </div>
  );
}
