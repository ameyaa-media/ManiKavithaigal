"use client";

import { useState } from "react";
import { Video } from "@/lib/data/videos";

interface VideoCardProps {
    video: Video;
    onPlay: (video: Video) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
    const thumbnailUrl = video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow"
            onClick={() => onPlay(video)}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-neutral-200">
                <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                    {video.title}
                </h3>
                <p className="text-lg font-tamil text-neutral-700 mb-3 line-clamp-1">
                    {video.titleTamil}
                </p>
                <p className="text-neutral-600 text-sm line-clamp-2">
                    {video.description}
                </p>
            </div>
        </div>
    );
}
