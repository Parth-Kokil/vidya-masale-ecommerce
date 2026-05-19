import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="bg-gradient-to-b from-brand-cream to-white pt-20 pb-16">
      <div className="brand-container text-center">
        <div className="mb-8 animate-slide-in-down">
          <h1 className="text-6xl font-playfair font-bold text-brand-maroon mb-4">
            Vidya Sanskriti Masale
          </h1>
          <p className="text-2xl text-brand-gold font-semibold">
            Pure. Traditional. Fresh.
          </p>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-in-up">
          Authentic Maharashtrian spices and chutneys, crafted with traditional recipes passed down through generations. No artificial colors. No preservatives. Just pure taste.
        </p>
        <a
          href="/shop"
          className="inline-block bg-brand-maroon text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition animate-slide-in-up"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
