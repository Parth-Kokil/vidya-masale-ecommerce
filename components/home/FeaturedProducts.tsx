import { FC } from "react";

const FeaturedProducts: FC = () => {
  const products = [
    {
      name: "Special Kanda Lasun Masala",
      price: "₹299",
      image: "https://source.unsplash.com/400x400/?indian,spice,masala,red",
    },
    {
      name: "Goda Masala",
      price: "₹399",
      image: "https://source.unsplash.com/400x400/?spice,aromatic",
    },
    {
      name: "Malvani Masala",
      price: "₹399",
      image: "https://source.unsplash.com/400x400/?spice,powder,mix",
    },
    {
      name: "Lasun Chutney",
      price: "₹249",
      image: "https://source.unsplash.com/400x400/?chutney,sauce,indian",
    },
    {
      name: "Shingdana Chutney",
      price: "₹299",
      image: "https://source.unsplash.com/400x400/?peanut,chutney,sauce",
    },
    {
      name: "Kaju Chutney",
      price: "₹399",
      image: "https://source.unsplash.com/400x400/?cashew,cream,sauce",
    },
  ];

  return (
    <section className="py-16">
      <div className="brand-container">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-brand-maroon">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-brand-gold font-bold text-xl mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-brand-maroon text-white py-2 rounded hover:bg-brand-gold hover:text-brand-maroon transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
