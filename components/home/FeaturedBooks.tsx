"use client";
import Link from "next/link";
import { getFeaturedBooks } from "@/lib/data/books";
import { cn } from "@/lib/utils";
import BookCard from "@/components/books/BookCard";
import Container from "../ui/Container";
import { buttonBaseStyles, buttonSizes, buttonVariants } from "../ui/Button";

export default function FeaturedBooks() {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-purple-50 dark:bg-neutral-900/50 relative overflow-hidden transition-colors duration-300">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-5">
            <span className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg">
              Bestsellers
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Featured Books
            </h2>
            <h3 className="text-2xl sm:text-2xl font-tamil font-semibold text-purple-700 dark:text-purple-400">
              சிறப்பு புத்தகங்கள்
            </h3>
          </div>

          <p className="text-lg md:text-xl text-gray-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Explore my most popular works, each crafted with passion and
            dedication to Tamil literature and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 md:mb-20">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/books"
            className={cn(
              buttonBaseStyles,
              buttonVariants["outline"],
              buttonSizes["lg"],
              "shadow-lg"
            )}
          >
            View All Books
          </Link>
        </div>
      </Container>
    </section>
  );
}
