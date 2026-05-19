import { FC } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/shop/${product.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
        <div className="h-48 overflow-hidden bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-brand-maroon">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-brand-gold font-bold text-xl">
              ₹{(product.price / 100).toFixed(0)}
            </p>
            <button className="bg-brand-maroon text-white px-4 py-2 rounded hover:bg-brand-gold hover:text-brand-maroon transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
