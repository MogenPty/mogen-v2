import type React from "react";

/**
 * HighlightedText component for styled inline highlights.
 * @param {string} children - The text to highlight.
 * @param {string} className - Additional classes to apply.
 * @param {object} rest - Other props.
 */
export default function HighlightedText({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: React.ReactNode;
}) {
  return (
    <span
      className={`inline-block max-w-full px-2 py-1 neo-brutalist-border-thin wrap-break-word font-bold text-sm md:text-base lg:text-lg ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
