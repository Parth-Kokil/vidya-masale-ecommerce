# Vidya Sanskriti Masale E-Commerce - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Parth-Kokil/vidya-masale-ecommerce.git
cd vidya-masale-ecommerce
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create `.env.local` in the root directory:

```env
# Database
DATABASE_URL="file:./prisma/dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (Optional - for Google login)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Razorpay (Test Mode)
RAZORPAY_KEY_ID="rzp_test_XXXXXXXXXX"
RAZORPAY_KEY_SECRET="XXXXXXXXXX"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_XXXXXXXXXX"

# Cloudinary (Optional - for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### 4. Setup Database
```bash
# Run migrations
npx prisma migrate dev

# Seed the database with 12 products
npm run seed
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run seed      # Seed database with products
```

---

## 🔐 Security Setup

### Generate NEXTAUTH_SECRET
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Google OAuth Setup (Optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

### Razorpay Setup
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Enable Test Mode
3. Copy Test Key ID and Secret
4. Add to `.env.local`

---

## 📁 Project Structure

```
.
├── app/
│   ├── (auth)/              # Auth routes group
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── admin/               # Admin dashboard
│   ├── shop/                # Shop pages
│   │   ├── page.tsx         # Product listing
│   │   └── [slug]/page.tsx  # Product detail
│   ├── cart/page.tsx        # Shopping cart
│   ├── checkout/page.tsx    # Checkout
│   ├── order-success/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── api/                 # API routes
│   │   ├── auth/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── orders/
│   │   └── razorpay/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── Testimonials.tsx
│   └── shop/
│       └── ProductCard.tsx
├── lib/
│   ├── prisma.ts
│   ├── razorpay.ts
│   └── auth.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── types/
│   └── product.ts
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Brand Identity

### Colors
- **Maroon**: `#8B1E2F` - Primary color
- **Gold**: `#FFB300` - Accent color
- **Cream**: `#FFF8F0` - Background color

### Typography
- **Headings**: Playfair Display
- **Body**: Inter

### Tagline
"Pure. Traditional. Fresh."

---

## 📦 Products Database

The database is automatically seeded with 12 products:

### Masalas (7)
1. Special Kanda Lasun Masala - ₹299
2. Bhaati Kanda Lasun - ₹349
3. Chicken Matan Masala - ₹449
4. Malvani Masala - ₹399
5. Kala Masala - ₹549
6. Goda Masala - ₹399
7. Misal Masala - ₹299

### Chutneys (5)
1. Lasun Chutney - ₹249
2. Shingdana Chutney - ₹299
3. Kaju Chutney - ₹399
4. Javas Chutney - ₹229
5. Kadipatta Chutney - ₹249

---

## 🌐 API Routes

### Products
- `GET /api/products` - Get all products (with optional `?category=masala` filter)
- `GET /api/products/[slug]` - Get single product detail

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
  ```json
  { "productId": "...", "quantity": 1 }
  ```

### Orders
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order
  ```json
  {
    "items": [
      { "productId": "...", "quantity": 1, "price": 29900 }
    ],
    "total": 29900,
    "address": { "name": "...", "phone": "...", "city": "..." }
  }
  ```

### Razorpay
- `POST /api/razorpay/create-order` - Create Razorpay order
  ```json
  { "amount": 299 }
  ```
- `POST /api/razorpay/verify` - Verify payment
  ```json
  {
    "razorpay_order_id": "...",
    "razorpay_payment_id": "...",
    "razorpay_signature": "...",
    "orderId": "..."
  }
  ```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

### Environment Variables for Production
- Change `DATABASE_URL` to PostgreSQL or other production database
- Update `NEXTAUTH_URL` to your production domain
- Use production Razorpay keys (not test mode)
- Generate a new secure `NEXTAUTH_SECRET`

---

## 📱 Features

✅ **Home Page**
- Hero section with brand tagline
- Trust badges (100% Pure, No Preservatives, Homemade, Maharashtra's Taste)
- Featured products carousel
- Our story section
- Testimonials from happy customers
- WhatsApp floating button

✅ **Shop Page**
- Product grid with 12 products
- Filter by category (All, Masala, Chutney)
- Search functionality
- Responsive design (1, 2, 3 columns)

✅ **Product Detail**
- Large product image
- Price, description, ingredients
- How to use guide
- Benefits
- Quantity selector
- Add to cart & wishlist
- Related products

✅ **Cart & Checkout**
- Shopping cart management
- Quantity adjustment
- Order summary
- Address form
- Razorpay payment integration

✅ **Authentication**
- Email/password login
- Google OAuth login
- User registration
- Protected routes

✅ **Admin Panel**
- Product management
- Order tracking
- Dashboard statistics

---

## 🐛 Troubleshooting

### Database Issues
```bash
# Reset database
npx prisma migrate reset
npm run seed
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Authentication Issues
- Ensure `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Verify Google credentials if using OAuth

---

## 📞 Contact

**Vidya Sanskriti Masale**
- 📍 Rajbhawan, Sangam-Mahuli, Satara, Maharashtra
- 📞 9923396090 / 9370030956
- 📧 vidyasanskrutimasale@gmail.com
- 💬 [WhatsApp](https://wa.me/919923396090)

---

## 📄 License

Private Project - Vidya Sanskriti Masale

---

## 🙏 Thank You!

Thank you for using Vidya Sanskriti Masale e-commerce platform!
