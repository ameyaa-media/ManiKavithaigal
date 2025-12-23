"use client";

import { useEffect } from "react";
import { Video } from "@/lib/data/videos";

interface VideoModalProps {
    video: Video;
    onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
                aria-label="Close"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Video Player */}
            <div
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
                <div className="mt-4 text-white">
                    <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
                    <p className="text-xl font-tamil text-neutral-300 mb-3">{video.titleTamil}</p>
                    <p className="text-neutral-400">{video.description}</p>
                </div>
            </div>
        </div>
    );
}
