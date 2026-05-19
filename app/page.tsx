"use client";

import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      {/* Offer Banner */}
      <div className="bg-brand-gold text-brand-maroon py-3 text-center font-semibold">
        🌶 Free delivery on orders above ₹499!
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Our Story */}
      <section className="py-16 bg-brand-cream">
        <div className="brand-container max-w-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-brand-maroon">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Vidya Sanskriti Masale, we bring you authentic Maharashtrian spices
            crafted with traditional recipes passed down through generations. Every
            blend is carefully prepared to ensure you get the authentic taste of
            Maharashtra in every meal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We believe in purity and tradition. No artificial colors. No
            preservatives. No compromises. Just pure, fresh spices that enhance
            your cooking and add authentic flavor to your table.
          </p>
          <p className="text-brand-gold font-semibold text-xl mt-6">
            ₹20/kg cheaper than market price!
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-brand-maroon text-white py-12">
        <div className="brand-container text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Experience Authentic Taste Today
          </h2>
          <a
            href="/shop"
            className="inline-block bg-brand-gold text-brand-maroon px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </div>
  );
}
