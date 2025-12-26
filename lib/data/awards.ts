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
    title: "Ilakkiya Mamani Virudhu",
    titleTamil: "இலக்கிய மாமணி விருது",
    organization: "Govt of Tamil Nadu",
    organizationTamil: "தமிழ் இலக்கிய சங்கம்",
    year: 2024,
    description:
      "Awarded for outstanding contribution to Tamil literature and cultural preservation.",
    descriptionTamil:
      "இலக்கிய மாமணி விருது என்பது தமிழக அரசால் தமிழுக்கும் தமிழ் இலக்கிய வளர்ச்சிக்கும் பங்களிக்கும் அறிஞர்களுக்கு வழங்கப்படும் உயரிய விருது ஆகும்",
  },
  {
    id: "2",
    title: "Tamil Chemmal Award",
    titleTamil: "தமிழ் செம்மல் விருது",
    organization: "Tamil Nadu Government",
    organizationTamil: "தமிழ்நாடு அரசு",
    year: 2017,
    description: "Annual state award for dedicated Tamil service",
    descriptionTamil: "தமிழ் சேவைக்கான ஆண்டு மாநில விருது",
  },
  {
    id: "3",
    title: "Best Book Award-Poetry",
    titleTamil: "சிறந்த புத்தக விருது - கவிதை",
    organization: "Tamil Nadu Government",
    organizationTamil: "தமிழ்நாடு அரசு",
    year: 2018,
    description:
      "Recognition for exceptional storytelling and narrative craft in Tamil Poetry.",
    descriptionTamil:
      "தமிழ் கவிதையில் விதிவிலக்கான கதை சொல்லல் மற்றும் கதை கைவினைக்கான அங்கீகாரம்.",
  },
  {
    id: "4",
    title: "The Enlightenment Award",
    titleTamil: "",
    organization: "International Tamil University- USA",
    organizationTamil: "அந்தர்காவிய தமிழ் பல்கலைக்கழகம்- அமெரிக்கா",
    year: 2021,
    description:
      "Honored for promoting Tamil language and culture through literary works.",
    descriptionTamil:
      "இலக்கிய படைப்புகள் மூலம் தமிழ் மொழி மற்றும் கலாச்சாரத்தை மேம்படுத்தியதற்காக கௌரவிக்கப்பட்டது.",
  },
  {
    id: "5",
    title: " Kavikquil Sarajini Devi Memorial award",
    titleTamil: "கவிக்குயில் சரோஜினி தேவி நினைவு விருது.",
    organization: "Vasanthavaasal, Covai",
    organizationTamil: "வசந்தவாசல், கோவை",
    year: 2009,
    description:
      "Honored for promoting Tamil language and culture through literary works.",
    descriptionTamil:
      "இலக்கிய படைப்புகள் மூலம் தமிழ் மொழி மற்றும் கலாச்சாரத்தை மேம்படுத்தியதற்காக கௌரவிக்கப்பட்டது.",
  },
];
