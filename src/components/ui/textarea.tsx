import * as React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`border w-full rounded-md px-3 py-2 focus:outline-purple-500 ${className}`}
      {...props}
    />
  )
);
