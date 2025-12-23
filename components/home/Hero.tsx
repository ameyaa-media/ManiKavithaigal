import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero({ bgImage }: { bgImage?: string }) {
  const bg = bgImage ?? "/bg.jpg";

  return (
    <section
      className="relative overflow-hidden bg-purple-50 dark:bg-neutral-900/50 py-20 md:py-28 lg:py-36 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${bg})`,
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-40 dark:opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-30 dark:opacity-10"></div>
      </div>

      <Container>
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-900 dark:text-purple-300 leading-tight tracking-tight">
              Welcome to the World of
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
              Mani Kavithaigal
            </h2>
          </div>

          {/* Tamil Tagline */}
          <p className="text-xl sm:text-xl md:text-xl font-tamil font-semibold text-purple-700 dark:text-purple-400 mb-8">
            தமிழ் இலக்கியத்தின் உலகிற்கு வரவேற்கிறோம்
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-xl text-gray-700 dark:text-neutral-300 mb-14 max-w-3xl mx-auto leading-relaxed">
            Discover compelling stories, rich cultural narratives, and timeless
            wisdom through the works of an award-winning Tamil author dedicated
            to preserving and celebrating Tamil heritage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
            <Link
              href="/books"
              className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl dark:bg-purple-600 dark:hover:bg-purple-700 px-10 py-4 text-lg w-full sm:w-auto"
            >
              Explore Books
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-500 dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white px-10 py-4 text-lg w-full sm:w-auto"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                22+
              </div>
              <div className="text-base md:text-lg text-gray-700 dark:text-neutral-300 font-semibold">
                Books Published
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                18+
              </div>
              <div className="text-base md:text-lg text-gray-700 dark:text-neutral-300 font-semibold">
                Awards Won
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                50K+
              </div>
              <div className="text-base md:text-lg text-gray-700 dark:text-neutral-300 font-semibold">
                Readers
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
