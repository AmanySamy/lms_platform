import { homePageData } from "@/data/HomePage";
import CoursesSection from "./components/CoursesSection";
import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-white font-body">
      <Hero />
      <FeatureSection {...homePageData.featureSection} />
      <CoursesSection {...homePageData.coursesSection} />
      <Testimonials {...homePageData.testimonialsSection} />
      <Cta {...homePageData.ctaSection} />
    </div>
  );
}
