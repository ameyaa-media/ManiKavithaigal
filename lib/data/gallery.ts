export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  altTamil: string;
  caption: string;
  captionTamil: string;
  category: "events" | "launches" | "personal";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/award-00.jpg",
    alt: "Book launch event",
    altTamil: "புத்தக வெளியீட்டு விழா",
    caption: "Book launch ceremony at Chennai Book Fair 2023",
    captionTamil: "சென்னை புத்தக கண்காட்சி 2023 இல் புத்தக வெளியீட்டு விழா",
    category: "launches",
  },
  {
    id: "2",
    src: "/gallery/award-02.jpg",
    alt: "Literary festival",
    altTamil: "இலக்கிய விழா",
    caption: "Speaking at the Tamil Literary Festival",
    captionTamil: "தமிழ் இலக்கிய விழாவில் உரையாற்றுதல்",
    category: "events",
  },
  {
    id: "3",
    src: "/gallery/Apj.jpg",
    alt: "Writing session",
    altTamil: "எழுதும் அமர்வு",
    caption: "At my writing desk",
    captionTamil: "என் எழுதும் மேசையில்",
    category: "personal",
  },
  {
    id: "4",
    src: "/gallery/gal-01.jpg",
    alt: "Award ceremony",
    altTamil: "விருது வழங்கும் விழா",
    caption: "Receiving the Best Author Award 2023",
    captionTamil: "சிறந்த எழுத்தாளர் விருது 2023 பெறுதல்",
    category: "events",
  },
  {
    id: "5",
    src: "/gallery/gal-02.jpg",
    alt: "Book signing",
    altTamil: "புத்தக கையொப்பம்",
    caption: "Book signing session with readers",
    captionTamil: "வாசகர்களுடன் புத்தக கையொப்ப அமர்வு",
    category: "events",
  },
  {
    id: "6",
    src: "/gallery/gal-03.jpg",
    alt: "Library visit",
    altTamil: "நூலக வருகை",
    caption: "Visiting the Tamil Nadu State Library",
    captionTamil: "தமிழ்நாடு மாநில நூலகத்தை பார்வையிடுதல்",
    category: "personal",
  },
];

export function getGalleryByCategory(
  category: GalleryImage["category"]
): GalleryImage[] {
  return galleryImages.filter((image) => image.category === category);
}
