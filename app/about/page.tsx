import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the author's journey, writing philosophy, and achievements in Tamil literature.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container className="max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About the Author
          </h1>
          <p className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300">
            எழுத்தாளரைப் பற்றி
          </p>
        </div>

        {/* Author Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/mom-02.jpg"
            alt="Author Name"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Biography */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Biography
            </h2>
            <h3 className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300 mb-6">
              வாழ்க்கை வரலாறு
            </h3>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                Born on 2nd February 1951 in Thangadu Horanalli village, The
                Nilgiris, she grew up in a family rich with cultural values,
                being the daughter of Mr. Sockura Nanja Gowder and Mrs.
                Mathiyammal Keppiammal.
              </p>
              <p>
                Her pursuit of knowledge led her to complete B.Sc., M.A., M.Ed.,
                and M.Phil., studying at reputed institutions such as Nirmala
                College, PSGR Krishnammal College for Women, and NKT National
                Training College, Chennai. This strong academic foundation
                shaped her career as a passionate Post Graduate Teacher of
                English, a role she embraced from 1981 until her retirement in
                2009. Over nearly three decades of teaching across esteemed
                schools in The Nilgiris, she inspired countless young minds.
              </p>
              <p>
                Parallel to her teaching career, her devotion to Tamil
                literature and poetry blossomed. A true devotee of Goddess
                Karumari, she began penning verses that carried deep spiritual,
                social, and philosophical meanings. In 2004, her works reached
                none other than Dr. A.P.J. Abdul Kalam, who personally
                acknowledged her with a letter of appreciation—an encouragement
                that further fueled her literary path.
              </p>
              <p>
                Her creative contributions include 22 published books spanning
                devotional hymns, motivational poems, children’s songs, haiku
                collections, and Tamil–Badugu translations. Her book “Manam
                Vittu Pesalaam” earned the Tamil Nadu Best Book Award, while
                “Bharatha Thaayin Veedhi Ula Unarththum Unmaigal” received the
                Enlightenment Award from the American Tamil University. She also
                ventured into audio productions, releasing cassettes such as
                Karumari Un Kaladiyil and Sudhandhira India, the latter
                continuing to inspire patriotism through digital platforms like
                YouTube. Notably, at the age of 70, she typed and compiled a
                monumental work, Badugu Bashe Thirukkuralu, showcasing her
                dedication and perseverance.
              </p>
              <p>
                Her literary brilliance has been recognized with numerous
                honors, including the prestigious Thamizh Chemmal Award in 2015,
                and most recently, the Ilakkiya Maamani Award in 2025, conferred
                by the Honorable Chief Minister of Tamil Nadu Mr.M.K.Stalin,
                accompanied by a gold coin and a cash prize of five lakhs.
              </p>
              <p>
                Over the years, she has earned several titles of respect such as
                Arul Kavithayini, Kurinji Kaviyarasi, Thamizh Mozhi Chirpi, and
                the First Poetess of the Nilgiri Badaga community. These are a
                testament not only to her creativity but also to her role as a
                cultural torchbearer. Today, we celebrate not just an author and
                poet, but a visionary who transformed her devotion, discipline,
                and determination into a lifelong contribution to Tamil language
                and literature. Ladies and gentlemen, please join me in
                welcoming and honoring Thirumathi Kavithayini Mani Arjunan, a
                shining beacon of Tamil literary heritage.
              </p>

              <p className="font-tamil text-lg">
                தமிழ்நாட்டில் பிறந்து வளர்ந்த நான், சிறு வயதிலிருந்தே தமிழ்
                இலக்கியத்தின் மீது ஆழ்ந்த அன்பு கொண்டிருந்தேன். எழுத்தாளராக எனது
                பயணம் கல்லூரி ஆண்டுகளில் தொடங்கியது, அங்கு நான் இலக்கிய
                இதழ்களுக்கு சிறுகதைகளை பங்களிக்க ஆரம்பித்தேன்.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Writing Philosophy
            </h2>
            <h3 className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300 mb-6">
              எழுத்து தத்துவம்
            </h3>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                Parallel to her teaching career, her devotion to Tamil
                literature and poetry blossomed. A true devotee of Goddess
                Karumari, she began penning verses that carried deep spiritual,
                social, and philosophical meanings. In 2004, her works reached
                none other than Dr. A.P.J. Abdul Kalam, who personally
                acknowledged her with a letter of appreciation—an encouragement
                that further fueled her literary path.
              </p>
              <p>
                Every story I write is crafted with meticulous attention to
                language, ensuring that the beauty and depth of Tamil are
                preserved for future generations. I believe that through
                storytelling, we can keep our culture alive and relevant in an
                ever-changing world.
              </p>
              <p className="font-tamil text-lg">
                எனது எழுத்து தத்துவம் இலக்கியம் பாரம்பரியத்திற்கும்
                நவீனத்துவத்திற்கும் இடையே ஒரு பாலமாக செயல்பட வேண்டும் என்ற
                நம்பிக்கையில் வேரூன்றியுள்ளது.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Achievements
            </h2>
            <h3 className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300 mb-6">
              சாதனைகள்
            </h3>

            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Ilakkiamamani Award -tamil Nadu government.<br></br>-இலக்கிய
                  மாமணி விருது -தமிழக அரசு.{" "}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Tamil chemmal Award-Tamil Nadu govt. <br />
                  தமிழ்ச் செம்மல் விருது. - தமிழக அரசு
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  The best book award. -Tamil Nadu Government <br />
                  சிறந்த கவிதைநூல் விருது - தமிழ்நாடு அரசு
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Appreciation certificate -The Nilgiris.
                  <br />
                  பாராட்டுச் சான்றிதழ்- நீலகிரி மாவட்ட நிர்வாகம்.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Kavikquil Sarajini Devi Memorial award-Vasanthavaasal, Covai
                  <br />
                  கவிக்குயில் சரோஜினி தேவி நினைவு விருது. -வசந்தவாசல் கவிமன்றம்,
                  கோவை.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Achiever's award- Chennai
                  <br />
                  சாதனையாளர் விருது-சென்னை
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Sevarathna award -Chennai <br />
                  சேவாரத்ன விருது. -சென்னை.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 dark:text-white mr-2">•</span>
                <span>
                  Kavichuder award -Chennai.
                  <br />
                  கவிச்சுடர் விருது-சென்னை.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Connect With Me
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              I love hearing from readers and fellow literature enthusiasts.
              Feel free to reach out through the contact page or connect with me
              on social media.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
