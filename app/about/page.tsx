"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="brand-container py-12 max-w-3xl">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-brand-maroon">
          About Vidya Sanskriti Masale
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4 text-brand-maroon">
            Our Heritage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vidya Sanskriti Masale (also known as Vyankatesh Masale) is a
            traditional spice brand rooted in the authentic culinary traditions of
            Maharashtra. We have been crafting premium masalas and chutneys with
            time-tested recipes that have been passed down through generations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4 text-brand-maroon">
            Our Promise
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-gold font-bold">✓</span>
              <span>100% Pure: No artificial colors or preservatives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-gold font-bold">✓</span>
              <span>Homemade Quality: Crafted with care and tradition</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-gold font-bold">✓</span>
              <span>Authentic Recipes: Traditional Maharashtrian flavors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-gold font-bold">✓</span>
              <span>₹20/kg Cheaper: Best value for authentic spices</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4 text-brand-maroon">
            Our Location
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Rajbhawan, Sangam-Mahuli, Satara, Maharashtra
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Located in the heart of Maharashtra, we maintain direct connections
            with quality spice suppliers and ensure every product meets our strict
            quality standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-playfair font-bold mb-4 text-brand-maroon">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-2">
            📞 9923396090 / 9370030956
          </p>
          <p className="text-gray-700 mb-2">
            📧 vidyasanskrutimasale@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
