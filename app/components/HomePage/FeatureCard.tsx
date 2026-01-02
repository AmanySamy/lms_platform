import React from "react";

const FeatureCard: React.FC<{icon: string, title: string, description: string}> = ({icon, title, description}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#111218] dark:text-white text-xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
