export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  titleTamil: string;
  description: string;
  descriptionTamil: string;
  thumbnail?: string;
}

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "c4vPDvcGo7A", // Replace with actual YouTube video IDs
    title:
      "Kavithayini Smt. Mani Arjunan Presents நிலவே - சரித்திர சந்திராயன் வாழ்க ! ",
    titleTamil: "சரித்திர சந்திராயன் வாழ்க !",
    description:
      "Nilavae Song is dedicated to our beloved Nation. It deals with the launch of CHANDRAYAN 3 Satellite",
    descriptionTamil:
      "கருப்பொருள்கள் மற்றும் கதாபாத்திரங்கள் பற்றிய விவாதத்துடன் எனது சமீபத்திய புத்தகத்திலிருந்து ஒரு வாசிப்பு அமர்வு.",
  },
  {
    id: "2",
    youtubeId: "Wfs6HPtnz-4", // Replace with actual YouTube video IDs
    title: "Secularism in the modern world",
    titleTamil: "தமிழ் இலக்கியம் பற்றிய நேர்காணல்",
    description:
      "An in-depth conversation about secularism in the modern world.",
    descriptionTamil:
      "தமிழ் இலக்கியத்தின் நிலை மற்றும் எனது எழுத்து பயணம் பற்றிய ஆழமான உரையாடல்.",
  },
  {
    id: "3",
    youtubeId: "D06pFs4GRAs", // Replace with actual YouTube video IDs
    title: "The Shrunken World",
    titleTamil: "புத்தக வெளியீட்டு சிறப்பம்சங்கள்",
    description:
      "In a shrunken word, money's grasp, fleeting dreams traded, where values fade.",
    descriptionTamil:
      "சென்னை புத்தக கண்காட்சி 2023 இல் புத்தக வெளியீட்டு நிகழ்வின் சிறப்பம்சங்கள்.",
  },
  {
    id: "4",
    youtubeId: "sDHUoVqy-1M", // Replace with actual YouTube video IDs
    title: "Writing Tips for Aspiring Authors",
    titleTamil: "வருங்கால எழுத்தாளர்களுக்கான எழுத்து குறிப்புகள்",
    description:
      "Sharing my experience and tips for those who want to start their writing journey.",
    descriptionTamil:
      "தங்கள் எழுத்து பயணத்தை தொடங்க விரும்புவோருக்கு எனது அனுபவத்தையும் குறிப்புகளையும் பகிர்தல்.",
  },
];
