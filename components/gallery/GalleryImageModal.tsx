"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GalleryImage } from "@/lib/data/gallery";

interface ImageModalProps {
  image: GalleryImage;
  images: GalleryImage[];
  onClose: () => void;
  onNavigate: (image: GalleryImage) => void;
}

export default function GalleryImageModal({
  image,
  images,
  onClose,
  onNavigate,
}: ImageModalProps) {
  const currentIndex = images.findIndex((img) => img.id === image.id);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(images[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    // Focus the close button when modal opens for keyboard users
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-md px-2 py-1"
        aria-label="Close"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-4 text-white hover:text-neutral-300 z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-md px-2 py-1"
        aria-label="Previous"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 text-white hover:text-neutral-300 z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-md px-2 py-1"
        aria-label="Next"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <p className="text-lg font-medium">{image.caption}</p>
          <p className="text-base font-tamil text-neutral-300">
            {image.captionTamil}
          </p>
        </div>
      </div>
    </div>
  );
}
