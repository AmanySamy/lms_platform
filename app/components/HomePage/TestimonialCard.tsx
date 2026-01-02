import React from "react";
import { TestimonialCardProps } from "./Testimonials";
import Image from "next/image";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  rating,
  feedback,
}) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4">
      <div className="text-yellow-400 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="material-symbols-outlined fill-yellow-400">
            star
          </span>
        ))}
        {rating % 1 !== 0 && (
          <span
            className="material-symbols-outlined fill-gray-300 dark:fill-gray-600"
          >star_half</span>
        )}
      </div>

      <p className="text-gray-700 dark:text-gray-300 flex-1">{feedback}</p>
      <div className="flex items-center gap-3 pt-2">
        <Image
          alt={name}
          className="w-10 h-10 rounded-full"
          src={avatar}
          width={40}
          height={40}
        />
        <div>
          <p className="text-sm font-bold text-neutral-900 dark:text-white">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
