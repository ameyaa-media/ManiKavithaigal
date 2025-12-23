export interface Award {
  id: string;
  title: string;
  titleTamil: string;
  organization: string;
  organizationTamil: string;
  year: number;
  description: string;
  descriptionTamil: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Best Tamil Author Award",
    titleTamil: "சிறந்த தமிழ் எழுத்தாளர் விருது",
    organization: "Tamil Literary Association",
    organizationTamil: "தமிழ் இலக்கிய சங்கம்",
    year: 2023,
    description:
      "Awarded for outstanding contribution to Tamil literature and cultural preservation.",
    descriptionTamil:
      "தமிழ் இலக்கியம் மற்றும் கலாச்சார பாதுகாப்பிற்கான சிறந்த பங்களிப்புக்காக வழங்கப்பட்டது.",
  },
  {
    id: "2",
    title: "Best Tamil Author Award",
    titleTamil: "சிறந்த தமிழ் எழுத்தாளர் விருது",
    organization: "Tamil Literary Association",
    organizationTamil: "தமிழ் இலக்கிய சங்கம்",
    year: 2023,
    description:
      "Awarded for outstanding contribution to Tamil literature and cultural preservation.",
    descriptionTamil:
      "தமிழ் இலக்கியம் மற்றும் கலாச்சார பாதுகாப்பிற்கான சிறந்த பங்களிப்புக்காக வழங்கப்பட்டது.",
  },
  {
    id: "3",
    title: "Excellence in Fiction",
    titleTamil: "புனைகதையில் சிறப்பு",
    organization: "National Book Council",
    organizationTamil: "தேசிய புத்தக கவுன்சில்",
    year: 2022,
    description:
      "Recognition for exceptional storytelling and narrative craft in Tamil fiction.",
    descriptionTamil:
      "தமிழ் புனைகதையில் விதிவிலக்கான கதை சொல்லல் மற்றும் கதை கைவினைக்கான அங்கீகாரம்.",
  },
  {
    id: "4",
    title: "Cultural Heritage Award",
    titleTamil: "கலாச்சார பாரம்பரிய விருது",
    organization: "Ministry of Culture",
    organizationTamil: "கலாச்சார அமைச்சகம்",
    year: 2021,
    description:
      "Honored for promoting Tamil language and culture through literary works.",
    descriptionTamil:
      "இலக்கிய படைப்புகள் மூலம் தமிழ் மொழி மற்றும் கலாச்சாரத்தை மேம்படுத்தியதற்காக கௌரவிக்கப்பட்டது.",
  },
];
