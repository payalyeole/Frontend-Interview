import * as React from "react";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition ${className}`}
      {...props}
    />
  );
}
