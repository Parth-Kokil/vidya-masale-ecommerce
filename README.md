# Vidya Sanskriti Masale E-Commerce Platform

## Features

✅ **Complete E-Commerce Platform**
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS with brand colors
- Prisma ORM with SQLite database
- NextAuth.js for authentication
- Razorpay integration for payments

## Products

**Masalas (7):**
1. Special Kanda Lasun Masala - ₹299
2. Bhaati Kanda Lasun - ₹349
3. Chicken Matan Masala - ₹449
4. Malvani Masala - ₹399
5. Kala Masala - ₹549
6. Goda Masala - ₹399
7. Misal Masala - ₹299

**Chutneys (5):**
1. Lasun Chutney - ₹249
2. Shingdana Chutney - ₹299
3. Kaju Chutney - ₹399
4. Javas Chutney - ₹229
5. Kadipatta Chutney - ₹249

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Create `.env.local` with:
```
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
RAZORPAY_KEY_ID="rzp_test_XXXXXXXXXX"
RAZORPAY_KEY_SECRET="XXXXXXXXXX"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_XXXXXXXXXX"
```

### 3. Setup Database
```bash
npx prisma migrate dev
npm run seed
```

### 4. Run Development Server
```bash
npm run dev
```

## Pages

- **Home** (`/`) - Hero, trust badges, featured products, testimonials
- **Shop** (`/shop`) - Product listing with filters
- **Product Detail** (`/shop/[slug]`) - Full product information
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Order placement
- **Order Success** (`/order-success`) - Order confirmation
- **About** (`/about`) - Brand story
- **Contact** (`/contact`) - Contact form and details
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - User registration
- **Admin** (`/admin`) - Admin dashboard (protected)

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma + SQLite
- **Authentication**: NextAuth.js
- **Payments**: Razorpay (Test Mode)

## Brand Colors

- **Maroon**: #8B1E2F
- **Gold**: #FFB300
- **Cream**: #FFF8F0