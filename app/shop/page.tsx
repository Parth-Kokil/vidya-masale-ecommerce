"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/shop/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [category, search, products]);

  return (
    <div className="min-h-screen">
      <div className="brand-container py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-brand-maroon">
          Our Shop
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border-2 border-brand-maroon rounded-lg mb-8 focus:outline-none focus:border-brand-gold"
        />

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {["all", "masala", "chutney"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                category === cat
                  ? "bg-brand-maroon text-white"
                  : "bg-gray-200 text-brand-maroon hover:bg-brand-gold"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
