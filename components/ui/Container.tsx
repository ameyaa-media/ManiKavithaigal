import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * Size controls the max-width of the container. Defaults to 'lg'.
   */
  size?: "sm" | "md" | "lg";
}

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  const sizeClass =
    size === "sm" ? "max-w-3xl" : size === "md" ? "max-w-5xl" : "max-w-7xl";

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeClass,
        className
      )}
    >
      {children}
    </div>
  );
}
