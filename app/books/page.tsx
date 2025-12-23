import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { books } from "@/lib/data/books";
import BookCard from "@/components/books/BookCard";
import PrintOnRequest from "@/components/home/PrintOnRequest";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore the complete collection of Tamil books by Author Name. Download or request print copies.",
};

export default function BooksPage() {
  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            My Books
          </h1>
          <p className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300 mb-4">
            என் புத்தகங்கள்
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore my complete collection of my books. Each book is available
            for free download or can be requested as a print-on-demand copy.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Container>

      {/* Print on Request Section */}
      <PrintOnRequest />
    </div>
  );
}
