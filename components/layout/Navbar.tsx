import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-brand-maroon text-white sticky top-0 z-50">
      <div className="brand-container py-4 flex items-center justify-between">
        <h1 className="text-2xl font-playfair font-bold">Vidya Sanskriti</h1>
        <div className="flex gap-6">
          <a href="/" className="hover:text-brand-gold transition">Home</a>
          <a href="/shop" className="hover:text-brand-gold transition">Shop</a>
          <a href="/about" className="hover:text-brand-gold transition">About</a>
          <a href="/contact" className="hover:text-brand-gold transition">Contact</a>
          <a href="/cart" className="hover:text-brand-gold transition">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
