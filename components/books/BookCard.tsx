"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/lib/data/books";
import { cn } from "@/lib/utils";
import { buttonBaseStyles, buttonSizes, buttonVariants } from "../ui/Button";
import DownloadButton from "./DownloadButton";

interface BookCardProps {
  book: Book;
  priority?: boolean;
}

export default function BookCard({ book, priority = false }: BookCardProps) {
  return (
    <div className="group relative">
      {/* Border effect */}
      <div className="absolute -inset-0.5 bg-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"></div>

      <div className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
        {/* Book Cover */}
        <div className="relative aspect-[3/4] bg-purple-100 dark:bg-neutral-700 overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            quality={75}
            className="object-cover transform group-hover:scale-110 transition duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Book Info */}
        <div className="p-4">
          <div className="mb-4 space-y-1">
            <h3 className="text-md font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition duration-300 leading-snug">
              {book.title}
            </h3>
            <p className="text-sm font-tamil font-semibold text-purple-700 dark:text-purple-400 line-clamp-1">
              {book.titleTamil}
            </p>
          </div>

          {/* <p className="text-gray-600 dark:text-neutral-300 text-sm mb-5 line-clamp-3 leading-relaxed">
            {book.description}
          </p>*/}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-neutral-400 mb-2 pb-2 border-b border-gray-100 dark:border-neutral-700">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
              {book.publishedYear}
            </span>
            <span className="text-gray-300 dark:text-neutral-600">•</span>
            <span className="font-medium">{book.pages} pages</span>
            <span className="text-gray-300 dark:text-neutral-600">•</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              {book.category}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link
              href={`/books/${book.slug}`}
              className={cn(
                buttonBaseStyles,
                buttonVariants["primary"],
                buttonSizes["sm"],
                "w-full flex-1"
              )}
            >
              View Details
            </Link>
            {book.downloadUrl && <DownloadButton url={book.downloadUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
}
