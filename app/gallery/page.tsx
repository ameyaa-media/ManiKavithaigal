import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { galleryImages } from "@/lib/data/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Explore photos from book launches, literary events, and personal moments of Author Name.",
};

export default function GalleryPage() {
    return (
        <div className="py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Gallery
                    </h1>
                    <p className="text-2xl font-tamil text-neutral-700 mb-4">
                        படத் தொகுப்பு
                    </p>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        A visual journey through book launches, literary festivals, award ceremonies,
                        and personal moments from my writing career.
                    </p>
                </div>

                {/* Gallery Grid */}
                <GalleryGrid images={galleryImages} />
            </Container>
        </div>
    );
}
