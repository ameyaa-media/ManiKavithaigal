import { Award } from "@/lib/data/awards";

interface AwardCardProps {
    award: Award;
}

export default function AwardCard({ award }: AwardCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            {/* Year Badge */}
            <div className="inline-block bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {award.year}
            </div>

            {/* Award Title */}
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {award.title}
            </h3>
            <p className="text-xl font-tamil text-neutral-700 mb-4">
                {award.titleTamil}
            </p>

            {/* Organization */}
            <div className="mb-4">
                <p className="text-neutral-600 font-medium">{award.organization}</p>
                <p className="text-neutral-600 font-tamil text-sm">{award.organizationTamil}</p>
            </div>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed mb-2">
                {award.description}
            </p>
            <p className="text-neutral-600 font-tamil text-sm leading-relaxed">
                {award.descriptionTamil}
            </p>

            {/* Trophy Icon */}
            <div className="mt-4 flex justify-end">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            </div>
        </div>
    );
}
