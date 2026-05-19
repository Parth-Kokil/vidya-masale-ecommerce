"use client";

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <div className="brand-container py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-brand-maroon">
          Your Shopping Cart
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
          <a
            href="/shop"
            className="inline-block mt-6 bg-brand-maroon text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}