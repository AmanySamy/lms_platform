import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
export interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  courseImage: string;
  instructor: { name: string; avatar: string };
  rating: number;
  viewCourse: { text: string; link: string };
}
function CourseCard({
  title,
  description,
  category,
  courseImage,
  instructor,
  rating,
  viewCourse,
}: CourseCardProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-surface-divider bg-neutral-white shadow-sm hover:shadow-lg transition-all group">
      <div className="w-full aspect-video bg-surface-divider relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          data-alt="People having a business meeting discussion"
          style={{ backgroundImage: `url('${courseImage}')` }}
        ></div>
        <div className="absolute top-3 left-3 bg-neutral-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-text-dark-gray">
          {category}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-text-primary text-lg font-bold leading-tight mb-1">
            {title}
          </h3>
          <p className="text-text-muted text-sm line-clamp-2">{description}</p>
        </div>
        <div className="mt-auto pt-4 border-t border-brand-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              alt="Instructor"
              className="w-8 h-8 rounded-full"
              data-alt={`Instructor ${instructor.name}`}
              src={instructor.avatar}
              width={32}
              height={32}
            />
            <span className="text-sm font-medium text-text-muted-dark">
              {instructor.name}
            </span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="material-symbols-outlined text-[18px] fill-current">
              star
            </span>
            <span className="text-sm font-bold text-text-primary">
              {rating}
            </span>
          </div>
        </div>
        <Button variant="default" size="md">
          {viewCourse.text}
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
