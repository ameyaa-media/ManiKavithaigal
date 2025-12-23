export interface Book {
  id: string;
  slug: string;
  title: string;
  titleTamil: string;
  description: string;
  descriptionTamil: string;
  coverImage: string;
  downloadUrl?: string;
  publishedYear: number;
  pages: number;
  isbn?: string;
  featured: boolean;
  category: string;
}

export const books: Book[] = [
  {
    id: "1",
    slug: "thedal",
    title: "Thedal",
    titleTamil: "தேடல்",
    description:
      "A compelling story about life, love, and the pursuit of happiness in modern Tamil Nadu.",
    descriptionTamil:
      "நவீன தமிழ்நாட்டில் வாழ்க்கை, காதல் மற்றும் மகிழ்ச்சியைத் தேடுவது பற்றிய ஒரு கவர்ச்சிகரமான கதை.",
    coverImage: "/books/thedal.jpg",
    downloadUrl: "/books/thedal.pdf",
    publishedYear: 2022,
    pages: 256,
    isbn: "978-1234567890",
    featured: true,
    category: "Poetry",
  },
  {
    id: "2",
    slug: "anbudan-kidaitha-selvangal",
    title: "Anbudan Kidaitha Selvangal",
    titleTamil: "அன்புடன் கிடைத்த செல்வங்கள்",
    description:
      "An insightful collection of essays on Tamil culture and heritage.",
    descriptionTamil:
      "தமிழ் கலாச்சாரம் மற்றும் பாரம்பரியம் பற்றிய நுண்ணறிவு கட்டுரைகளின் தொகுப்பு.",
    coverImage: "/books/Anbudan-Kidaitha-Selvangal.jpg",
    downloadUrl: "/books/sample-book-2.pdf",
    publishedYear: 2021,
    pages: 180,
    isbn: "978-1234567891",
    featured: true,
    category: "Poerty",
  },
  {
    id: "3",
    slug: "Manam_Vittu_Peasalam",
    title: "Manam Vittu Peasalam",
    titleTamil: "மனம் விட்டு பீசலம்",
    description:
      "A beautiful anthology of Tamil poetry celebrating nature and emotions.",
    descriptionTamil:
      "இயற்கை மற்றும் உணர்ச்சிகளைக் கொண்டாடும் தமிழ் கவிதைகளின் அழகான தொகுப்பு.",
    coverImage: "/books/Manam_Vittu_Peasalam.jpg",
    downloadUrl: "/books/sample-book-3.pdf",
    publishedYear: 2023,
    pages: 120,
    featured: true,
    category: "Poetry",
  },
  {
    id: "4",
    slug: "Sitharatha-Chinthinaigal",
    title: "Sitharatha Chinthinaigal",
    titleTamil: "சிதரத சிந்தினைகள்",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/Sitharatha-Chinthinaigal.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: true,
    category: "Poetry",
  },
  {
    id: "5",
    slug: "Mani-Kavithiygal-01",
    title: "Mani Kavithiygal vol-01",
    titleTamil: "மானிக்கவிதைகள் 01",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/Mani-Kavithiygal-01.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "6",
    slug: "Mani-Kavithiygal-02",
    title: "Mani Kavithiygal vol-02",
    titleTamil: "மானிக்கவிதைகள் 02",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/Mani-Kavithiygal-02.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "7",
    slug: "Mani-Kavithiygal-03",
    title: "Mani Kavithiygal vol-03",
    titleTamil: "மானிக்கவிதைகள் 03",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/Mani-Kavithiygal-03.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "8",
    slug: "mathu-mathu",
    title: "Mathu Mathu",
    titleTamil: "மது மது",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/mathu-mathu.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "9",
    slug: "thekutchi-theporigal",
    title: "Thekutchi Theporigal",
    titleTamil: "தெக்குச்சி தெபொரிகல்",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/thekutchi-theporigal.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "10",
    slug: "pala-paalam",
    title: "Pala Paalam",
    titleTamil: "பால பாலம்",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/pala-paalam.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "11",
    slug: "Vigneshwara-Murugan",
    title: "Vigneshwara Murugan",
    titleTamil: "விக்னேசுவர முருகன்",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/vigneshwara-murugan.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "12",
    slug: "pala-paalam",
    title: "Pala Paalam",
    titleTamil: "பால பாலம்",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/pala-paalam.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "13",
    slug: "odo-odi-viladu",
    title: "Odo Odi Viladu",
    titleTamil: "ஒடி ஒடி விளாடு",
    description: "A historical novel set in ancient Tamil kingdoms.",
    descriptionTamil: "பண்டைய தமிழ் அரசுகளில் அமைக்கப்பட்ட ஒரு வரலாற்று நாவல்.",
    coverImage: "/books/odo-odi-viladu.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((book) => book.featured);
}

export function getAllBookSlugs(): string[] {
  return books.map((book) => book.slug);
}
