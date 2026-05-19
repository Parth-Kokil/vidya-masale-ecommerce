"use client";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-playfair font-bold text-center mb-8 text-brand-maroon">
          Create Account
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
          />
          <button className="w-full bg-brand-maroon text-white py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition">
            Create Account
          </button>
        </div>
        <p className="text-center mt-6 text-gray-600">
          Already have an account? <a href="/login" className="text-brand-maroon font-semibold hover:text-brand-gold">Login here</a>
        </p>
      </div>
    </div>
  );
}