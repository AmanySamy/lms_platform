import CourseCard, { CourseCardProps } from "./CourseCard";
import Link from "next/link";
interface CoursesSectionProps {
  title: string;
  description: string;
  viewButton: { text: string; link: string };
  courses: CourseCardProps[];
}
const CoursesSection: React.FC<CoursesSectionProps> = ({
  title,
  description,
  viewButton,
  courses,
}) => {
  return (
    <section className="w-full bg-neutral-white py-16 md:py-24">
      <div className="px-4 md:px-10 mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight mb-2">
              {title}
            </h2>
            <p className="text-text-muted-dark text-base">{description}</p>
          </div>
          <Link
            className="hidden md:flex items-center gap-1 text-brand-main font-bold hover:underline"
            href={viewButton.link}
          >
            {viewButton.text}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-4">
          <Link
            className="flex items-center gap-1 text-brand-main font-bold hover:underline"
            href={viewButton.link}
          >
            {viewButton.text}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
