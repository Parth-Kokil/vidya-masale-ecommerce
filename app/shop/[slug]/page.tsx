"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products?category=all`);
        const products = await res.json();
        const found = products.find((p: Product) => p.slug === slug);
        setProduct(found || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  return (
    <div className="min-h-screen">
      <div className="brand-container py-12">
        <Link href="/shop" className="text-brand-maroon hover:text-brand-gold mb-6 inline-block">
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-playfair font-bold text-brand-maroon mb-4">
              {product.name}
            </h1>
            <p className="text-3xl text-brand-gold font-bold mb-4">
              ₹{(product.price / 100).toFixed(0)}
            </p>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-brand-maroon mb-2">Ingredients:</h3>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>

            {product.howToUse && (
              <div className="mb-6">
                <h3 className="font-semibold text-brand-maroon mb-2">How to Use:</h3>
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            )}

            {product.benefits && (
              <div className="mb-6">
                <h3 className="font-semibold text-brand-maroon mb-2">Benefits:</h3>
                <p className="text-gray-700">{product.benefits}</p>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border-2 border-brand-maroon rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-brand-maroon hover:bg-brand-cream"
                >
                  -
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-brand-maroon hover:bg-brand-cream"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-brand-maroon text-white py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition">
                Add to Cart
              </button>
            </div>

            <button className="w-full bg-white border-2 border-brand-maroon text-brand-maroon py-3 rounded-lg font-semibold hover:bg-brand-cream transition">
              ♥ Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}