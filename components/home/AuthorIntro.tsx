import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { cn } from "@/lib/utils";
import { buttonBaseStyles, buttonVariants, buttonSizes } from "../ui/Button";

export default function AuthorIntro() {
  return (
    <section
      id="author-intro"
      aria-labelledby="author-intro-heading"
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Author Image */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-1 bg-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/mom.jpg"
                alt="Portrait of Mani Arjunan"
                fill
                className="object-cover transform group-hover:scale-105 transition duration-700"
                priority
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block">
              <span className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                Award-Winning Author
              </span>
            </div>

            <div className="space-y-3">
              <h2
                id="author-intro-heading"
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                About Mani Arjunan
              </h2>
              <h3 className="text-md sm:text-md font-tamil font-semibold text-purple-700 dark:text-purple-400">
                எழுத்தாளரைப் பற்றி
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg pt-4">
              <p>
                An award-winning Tamil author with a passion for storytelling
                that bridges tradition and modernity. With over a decade of
                experience in Tamil literature, I have dedicated my life to
                creating works that resonate with readers across generations.
              </p>
              <p>
                My writing explores themes of culture, identity, and the human
                experience, always rooted in the rich tapestry of Tamil
                heritage. Each story is crafted with care to preserve our
                linguistic beauty while addressing contemporary issues.
              </p>
              <p className="font-tamil text-md md:text-md font-medium text-purple-700 dark:text-purple-400 pt-2">
                தமிழ் இலக்கியத்தின் வளர்ச்சிக்கும் பாதுகாப்பிற்கும்
                அர்ப்பணிக்கப்பட்ட ஒரு எழுத்தாளர்.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className={cn(
                  buttonBaseStyles,
                  buttonVariants.primary,
                  buttonSizes.lg,
                  "inline-flex"
                )}
                aria-label="Read full biography"
              >
                Read Full Biography
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
