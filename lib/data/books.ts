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
      "Thaedal describes the relationship  between  the author  and Goddess Shri  Devi Karumari.",
    descriptionTamil:
      "தேடல் நூலில் இந்நூலாசியர் தனக்கும் தேவி ஸ்ரீ கருமாரி  அன்னைக்கும் இடையே உள்ள ஈர்ப்பை உணர்ச்சிப் பூர்வமாக விளக்குகிறார்.",
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
      "This book offers the precious quotations of the prominent persons of the world.",
    descriptionTamil:
      "அன்பான,அழகான, ஆச்சரியமான,இனிமையான, இதமான, உணர்ச்சிப் பெருக்குவதான, ஊக்கம்  அளிப்பவையான,ஏற்றம் தருபவையான!ஒழுக்கம் அளிப்பவையான, வாழ்வில் ஓங்கி நிற்க வழிகாட்டும் நெறிமுறை களான முன்னோர்களின் அமுத வாக்குகள் இடம் பெற்றுள்ளன.",
    coverImage: "/books/Anbudan-Kidaitha-Selvangal.jpg",
    downloadUrl: "/books/sample-book-2.pdf",
    publishedYear: 2021,
    pages: 180,
    isbn: "978-1234567891",
    featured: true,
    category: "Poetry",
  },
  {
    id: "3",
    slug: "Manam_Vittu_Peasalam",
    title: "Manam Vittup Peasalam",
    titleTamil: "மனம் விட்டுப் பேசலாம் ",
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
    slug: "Sidharaadha-Sindhanaigal",
    title: "Sidharaadha Sindhanaigal",
    titleTamil: "சிதறாத சிந்தனைகள்",
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
    slug: "Bharathath-Thayin-Veetdi-Ula",
    title: "Bharathath Thayin Veetdi Ula",
    titleTamil: "பாரதத் தாயின் வீதி உலா",
    description:
      "The truth behind  the journey of Barathmaatha from ancient to present.Each and every citizen of India should realize the truth behind the journey of Barathmatha from ancient to present.",
    descriptionTamil:
      "ஆதிமுதல் இன்றுவரையிலான பாரதத்தாயின் வீதி உலாவும் அதில் அன்னை உணர்ந்த  உண்மைகளும் தெளிவாக விளக்கப் பட்டுள்ளன.  இங்கு இந்தியா குடிமகன்  ஒவ்வொருவரும் பாரதத் தாயாக உணர்தல் அவசியம். ",
    coverImage: "/books/bharath.jpg",
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
  {
    id: "14",
    slug: "nangooram",
    title: "Nangooram",
    titleTamil: "நங்கூரம்",
    description:
      "The relationship between an individual and his mind. Nangooram means anchor. As an anchor to a ship, the mind is to an individual.",
    descriptionTamil:
      '"நங்கூரம் "ஒரு தனி மனிதனுக்கும் அவரவர் மனதிற்கும் இடையே உள்ள  தொடர்பு  குறித்து விளக்குகிறது."மனமே நங்கூரம்" ',
    coverImage: "/books/Nangooram.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "15",
    slug: "Nizaltharum-ninaivalaigal",
    title: "Nizaltharum ninaivalaigal",
    titleTamil: "நிழல் தரும் நினைவலைகள்",
    description:
      "Nizaltharum ninaivalaigal gives solace to each and everyone  while reading those poems.",
    descriptionTamil:
      "நிழல்  தரும் நினைவலைகள் -இந்நூலில் இடம் பெற்றுள்ள பாடல்கள் அனைத்தும் ஆறுதல் அளிப்பனவாக உள்ளன. ",
    coverImage: "/books/nizal.jpg",
    downloadUrl: "/books/sample-book-4.pdf",
    publishedYear: 2020,
    pages: 320,
    featured: false,
    category: "Poetry",
  },
  {
    id: "16",
    slug: "Annaiyin-Arutprasaadhangal",
    title: "Annaiyin Arutprasaadhangal.",
    titleTamil: "அன்னையின் அருட் பிரசாதங்கள்",
    description:
      "Truth behind  the relationship between Goddess Karumari and the author of the book -IIakkia Mamani ,Thamilchemmal, kavithayini, Thirumathi. ManiArjunan.",
    descriptionTamil:
      "நீலகிரி மாவட்டம், உதகை ,சின்னத் திருவேற்காடு ஸ்ரீ தேவி  கருமாரியம்மன் ஆலயத்தில்  எழுந்தருளிய தெய்வம்  கருமாரி அன்னைக்கும் இந்நூலாசிரியர் கவிதாயினி.மணி அர்ஜுணன் அவர்களுக்கும் இடையே  நடந்த  உண்மைச் சம்பவங்களும் நிகழ்வுகளும் விளக்கப் பட்டுள்ளன.",
    coverImage: "/books/annaiyin.jpg",
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
