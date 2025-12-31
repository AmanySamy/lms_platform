import Image from "next/image";
import Button from "../Button";
import { homePageData } from "@/app/data/HomePage";
;

const Hero: React.FC = () => {
  return (
    // HeroSection
    <section className="w-full bg-white dark:bg-background-dark py-12 md:py-20 lg:py-24">
      <div className="px-4 md:px-10 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              {homePageData.hero.tag}
            </div>
            <h1 className="text-neutral-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              {homePageData.hero.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed max-w-xl">
                {homePageData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Button variant="primary" size="md">{homePageData.hero.primaryButton}</Button>
              <Button variant="white" size="md">{homePageData.hero.secondaryButton}</Button>
            </div>
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-3">
                <Image src="/lp/student1.png" alt="Student avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark" />
                <Image src="/lp/student2.png" alt="Student avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark" />
                <Image src="/lp/student3.png" alt="Student avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark" />
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-xs text-primary">
                  +2k
                </div>
              </div>
              <p>{homePageData.hero.trustedBy}</p>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt="Group of diverse students studying together with laptops"
                style={{
                  backgroundImage:
                    "url('/lp/hero.png')",
                }}
              ></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce [animation-duration:3s]">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full text-green-600 dark:text-green-300">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Daily Goal
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Completed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
