import CoursesSection from "./components/HomePage/CoursesSection";
import Cta from "./components/HomePage/Cta";
import FeatureSection from "./components/HomePage/FeatureSection";
import Hero from "./components/HomePage/Hero";
import Testimonials from "./components/HomePage/Testimonials";
import { homePageData } from "./data/HomePage";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-body dark:bg-black">
      <Hero />
      <FeatureSection {...homePageData.featureSection} />
      <CoursesSection {...homePageData.coursesSection} />
      <Testimonials {...homePageData.testimonialsSection} />
      <Cta {...homePageData.ctaSection} />
    </div>
  );
}
