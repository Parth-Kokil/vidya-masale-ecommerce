"use client";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen">
      <div className="brand-container py-12 max-w-2xl">
        <div className="text-center">
          <div className="text-6xl text-brand-gold mb-4">✅</div>
          <h1 className="text-4xl font-playfair font-bold mb-4 text-brand-maroon">
            Order Successful!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Thank you for your order! Your authentic Maharashtrian spices will be
            delivered soon.
          </p>
          <p className="text-gray-600 mb-8">
            Order ID: <span className="font-semibold">#VSM-2024001</span>
          </p>
          <div className="space-y-3 mb-8">
            <p className="text-gray-700">
              👋 Share your joy with a friend!
            </p>
            <a
              href="https://wa.me/919923396090?text=I%20just%20ordered%20from%20Vidya%20Sanskriti%20Masale%20and%20love%20their%20authentic%20spices!"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Share on WhatsApp
            </a>
          </div>
          <a
            href="/"
            className="inline-block bg-brand-maroon text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}