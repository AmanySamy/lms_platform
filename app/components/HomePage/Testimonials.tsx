import TestimonialCard from "./TestimonialCard";

export interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  feedback: string;
}

interface TestimonialsProps {
  title: string;
  description?: string;
  testimonials?: TestimonialCardProps[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ title, description, testimonials }) => {
  return (
    <section className="w-full bg-blue-50/50 dark:bg-gray-800/20 py-16 md:py-24 border-y border-blue-100/50 dark:border-gray-800">
      <div className="px-4 md:px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="max-w-2xl">
            <h2 className="text-neutral-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
            {testimonials && testimonials.map(
              (testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
