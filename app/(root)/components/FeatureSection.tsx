interface FeatureSectionProps {
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}
import FeatureCard from "./FeatureCard";
const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <section className="w-full bg-brand-subtle py-16 md:py-24">
      <div className="px-4 md:px-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-text-muted-dark text-lg font-normal leading-relaxed">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
