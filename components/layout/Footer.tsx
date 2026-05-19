import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-brand-maroon text-white py-12">
      <div className="brand-container">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-lg mb-4">Vidya Sanskriti</h3>
            <p className="text-sm text-gray-200">
              Pure. Traditional. Fresh. Authentic Maharashtrian spices crafted with traditional recipes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="hover:text-brand-gold">Shop</a></li>
              <li><a href="/about" className="hover:text-brand-gold">About Us</a></li>
              <li><a href="/contact" className="hover:text-brand-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">📞 9923396090 / 9370030956</p>
            <p className="text-sm">📧 vidyasanskrutimasale@gmail.com</p>
            <p className="text-sm">📍 Rajbhawan, Sangam-Mahuli, Satara, Maharashtra</p>
          </div>
        </div>
        <div className="border-t border-brand-gold pt-6 text-center text-sm">
          <p>&copy; 2024 Vidya Sanskriti Masale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
