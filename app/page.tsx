import Hero from "@/components/home/Hero";
import AuthorIntro from "@/components/home/AuthorIntro";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import PrintOnRequest from "@/components/home/PrintOnRequest";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorIntro />
      <FeaturedBooks />
      <TestimonialCarousel />
      <PrintOnRequest />
    </>
  );
}
