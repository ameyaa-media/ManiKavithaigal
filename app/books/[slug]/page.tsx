import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookBySlug, getAllBookSlugs, books } from "@/lib/data/books";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import DownloadButton from "@/components/books/DownloadButton";
import PrintRequestForm from "@/components/forms/PrintRequestForm";

export const dynamic = "force-dynamic";

interface BookPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllBookSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
    const { slug } = await params;
    const book = getBookBySlug(slug);

    if (!book) {
        return {
            title: "Book Not Found",
        };
    }

    return {
        title: book.title,
        description: book.description,
    };
}

export default async function BookDetailPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book = getBookBySlug(slug);

    if (!book) {
        notFound();
    }

    return (
        <div className="py-16">
            <Container>
                {/* Back Button */}
                <Link href="/books" className="inline-flex items-center text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Books
                </Link>

                {/* Book Details */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Book Cover */}
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-800">
                        <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Book Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            {book.title}
                        </h1>
                        <h2 className="text-3xl font-tamil text-neutral-700 dark:text-neutral-300 mb-6">
                            {book.titleTamil}
                        </h2>

                        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
                            <span className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">{book.category}</span>
                            <span>{book.publishedYear}</span>
                            <span>•</span>
                            <span>{book.pages} pages</span>
                            {book.isbn && (
                                <>
                                    <span>•</span>
                                    <span>ISBN: {book.isbn}</span>
                                </>
                            )}
                        </div>

                        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                            <p>{book.description}</p>
                            <p className="font-tamil text-lg">{book.descriptionTamil}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            {book.downloadUrl && (
                                <DownloadButton
                                    url={book.downloadUrl}
                                    variant="primary"
                                    size="lg"
                                    className="px-10 py-4 text-lg"
                                >
                                    Download PDF
                                </DownloadButton>
                            )}
                            <a
                                href="#print-request"
                                className={`inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-500 dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white px-10 py-4 text-lg`}
                            >
                                Request Print Copy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Print Request Form */}
                <div id="print-request" className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-8 md:p-12 transition-colors duration-300">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 text-center">
                        Request Print Copy
                    </h2>
                    <p className="text-2xl font-tamil text-neutral-700 dark:text-neutral-300 mb-6 text-center">
                        அச்சு நகல் கோரிக்கை
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center max-w-2xl mx-auto">
                        Fill out the form below to request a printed copy of this book. We'll contact you
                        with pricing and delivery details.
                    </p>
                    <div className="max-w-3xl mx-auto">
                        <PrintRequestForm bookTitle={book.title} />
                    </div>
                </div>

                {/* Related Books */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                        More Books
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {books
                            .filter((b) => b.id !== book.id)
                            .slice(0, 3)
                            .map((relatedBook) => (
                                <Link
                                    key={relatedBook.id}
                                    href={`/books/${relatedBook.slug}`}
                                    className="group"
                                >
                                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                                        <Image
                                            src={relatedBook.coverImage}
                                            alt={relatedBook.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                                        {relatedBook.title}
                                    </h3>
                                    <p className="font-tamil text-neutral-700 text-sm">
                                        {relatedBook.titleTamil}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
