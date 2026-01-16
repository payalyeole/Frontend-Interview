import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`border w-full rounded-md px-3 py-2 focus:outline-purple-500 ${className}`}
      {...props}
    />
  )
);
