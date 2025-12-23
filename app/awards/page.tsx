import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { awards } from "@/lib/data/awards";
import AwardCard from "@/components/awards/AwardCard";

export const metadata: Metadata = {
    title: "Awards",
    description: "Recognitions and awards received by Author Name for contributions to Tamil literature.",
};

export default function AwardsPage() {
    // Sort awards by year (most recent first)
    const sortedAwards = [...awards].sort((a, b) => b.year - a.year);

    return (
        <div className="py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Awards & Recognition
                    </h1>
                    <p className="text-2xl font-tamil text-neutral-700 mb-4">
                        விருதுகள் மற்றும் அங்கீகாரம்
                    </p>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Honored to receive recognition for my contributions to Tamil literature
                        and cultural preservation over the years.
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedAwards.map((award) => (
                        <AwardCard key={award.id} award={award} />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-neutral-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                        More Than Just Awards
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        While I'm grateful for these recognitions, my greatest reward is knowing that my
                        stories have touched readers' hearts and contributed to keeping Tamil literature
                        alive and thriving.
                    </p>
                </div>
            </Container>
        </div>
    );
}
