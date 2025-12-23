"use client";

import { cn } from "@/lib/utils";
import { buttonBaseStyles, buttonSizes, buttonVariants } from "../ui/Button";

interface DownloadButtonProps {
  url: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadButton({
  url,
  variant = "secondary",
  size = "sm",
  className,
  children = "Download",
}: DownloadButtonProps) {
  // derive a safe filename from the URL when possible
  const filename = (() => {
    try {
      if (typeof window !== "undefined") {
        const u = new URL(url, window.location.href);
        return decodeURIComponent(u.pathname.split("/").pop() || "download");
      }
      // fallback for SSR
      return decodeURIComponent(url.split("/").pop() || "download");
    } catch {
      return url.split("/").pop() || "download";
    }
  })();

  return (
    <a
      href={url}
      download={filename}
      aria-label={`Download ${filename}`}
      title={`Download ${filename}`}
      className={cn(
        buttonBaseStyles,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      onClick={(e) => {
        // Prevent download if file doesn't exist (for demo)
        if (!url.startsWith("http") && !url.startsWith("/")) {
          e.preventDefault();
          alert("Download will be available soon. This is a demo.");
        }
      }}
    >
      {children}
    </a>
  );
}
