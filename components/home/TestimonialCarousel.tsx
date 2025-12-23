"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            What Readers Say
          </h3>

          <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 sm:p-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-neutral-200 leading-relaxed mb-6">
              “{t.quote}”
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="text-sm md:text-base text-purple-600 font-semibold">
                {t.author}
              </div>
              <div className="text-sm text-gray-500">&middot;</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>

            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-purple-50 dark:bg-neutral-700 hover:bg-purple-100 dark:hover:bg-neutral-600 shadow"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-purple-600" : "bg-purple-200"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-purple-50 dark:bg-neutral-700 hover:bg-purple-100 dark:hover:bg-neutral-600 shadow"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
