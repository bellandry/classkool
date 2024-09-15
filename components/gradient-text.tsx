import React, { ReactNode } from "react";

interface GradientTextProps {
  element: "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
}
const GradientText = ({ element, children, className }: GradientTextProps) => {
  return React.createElement(
    element,
    {
      className: `bg-gradient-to-tr from-gray-500/50 via-gray-950/80 to-gray-950/30 dark:from-gray-400/50 dark:via-white dark:to-gray-400/50 bg-clip-text text-transparent inline-block ${className}`,
    },
    children
  );
};

export default GradientText;
