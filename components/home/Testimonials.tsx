import { FC } from "react";

const Testimonials: FC = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      text: "Finally found authentic masalas without any artificial additives. The quality is exceptional!",
      rating: 5,
    },
    {
      name: "Rahul Deshmukh",
      text: "Better than what I get at the local market. Highly recommended for authentic Maharashtrian cooking.",
      rating: 5,
    },
    {
      name: "Priya Kulkarni",
      text: "The chutneys are absolutely delicious. My family loves them. Worth every paisa!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-brand-cream">
      <div className="brand-container">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-brand-maroon">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-brand-gold mb-3 text-xl">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">\"{testimonial.text}\"</p>
              <p className="font-semibold text-brand-maroon">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
