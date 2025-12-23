"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { videos } from "@/lib/data/videos";
import VideoCard from "@/components/videos/VideoCard";
import VideoModal from "@/components/videos/VideoModal";
import { Video } from "@/lib/data/videos";

export default function VideosPage() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <div className="py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Videos
                    </h1>
                    <p className="text-2xl font-tamil text-neutral-700 mb-4">
                        காணொளிகள்
                    </p>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Watch book readings, interviews, writing tips, and highlights from literary events.
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            onPlay={setSelectedVideo}
                        />
                    ))}
                </div>
            </Container>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal
                    video={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    );
}
