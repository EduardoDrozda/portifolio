import React, { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

type Props = {
  textarea?: boolean;
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement>;

type Ref = LegacyRef<HTMLInputElement> | LegacyRef<HTMLTextAreaElement>;

const Input = forwardRef<Ref, Props>(
  ({ label, textarea, invalid, ...rest }, ref) => {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
    };

    const className = `w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 transition-all duration-300 ${
      focused ? "border-purple-500" : "border-gray-300"
    }`;

    return (
      <div className="w-full h-full flex flex-col gap-y-2">
        {textarea ? (
          <textarea
            className={className}
            {...rest}
            ref={ref as LegacyRef<HTMLTextAreaElement>}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <input
            className={className}
            {...rest}
            ref={ref as LegacyRef<HTMLInputElement>}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
