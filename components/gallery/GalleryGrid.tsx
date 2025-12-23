"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/lib/data/gallery";
import GalleryImageModal from "./GalleryImageModal";

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open image: ${image.caption}`}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.caption}</p>
                <p className="text-sm font-tamil">{image.captionTamil}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <GalleryImageModal
          image={selectedImage}
          images={images}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </>
  );
}
