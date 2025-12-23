import { Book } from "@/lib/data/books";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 text-lg">No books found.</p>
      </div>
    );
  }

  return (
    <div role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book, index) => (
        <div role="listitem" key={book.id}>
          <BookCard book={book} priority={index < 3} />
        </div>
      ))}
    </div>
  );
}
