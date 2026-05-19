"use client";

import { useEffect, useState } from "react";

interface Session {
  user?: {
    role?: string;
  };
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="brand-container py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-brand-maroon">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">
              Total Products
            </h3>
            <p className="text-3xl font-bold text-brand-gold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">
              Total Orders
            </h3>
            <p className="text-3xl font-bold text-brand-gold">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">
              Total Revenue
            </h3>
            <p className="text-3xl font-bold text-brand-gold">₹0</p>
          </div>
        </div>
      </div>
    </div>
  );
}