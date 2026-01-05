interface CtaProps {
  title?: string;
  description?: string;
  primaryButton?: { text: string; link: string };
  secondaryButton?: { text: string; link: string };
}
const Cta: React.FC<CtaProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className="w-full bg-neutral-white py-16 md:py-24">
      <div className="px-4 md:px-10 mx-auto max-w-5xl">
        <div className="bg-brand-main rounded-2xl p-8 md:p-16 text-center text-white flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(
                    circle at 2px 2px,
                    white 1px,
                    transparent 0
                  );`,
              backgroundSize: "24px 24px",
            }}
          ></div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight relative z-10">
            {title}
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl relative z-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 relative z-10 w-full sm:w-auto">
            <button className="bg-white text-brand-main hover:bg-gray-100 px-8 h-12 rounded-lg font-bold text-base transition-colors shadow-lg">
              {primaryButton?.text}
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 h-12 rounded-lg font-bold text-base transition-colors">
              {secondaryButton?.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
