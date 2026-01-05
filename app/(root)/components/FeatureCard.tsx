import React from "react";

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-neutral-white p-6 shadow-sm border border-surface-muted hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-surface-muted flex items-center justify-center text-brand-main">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-text-primary text-xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-text-muted-dark text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
