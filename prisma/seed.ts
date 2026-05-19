import { prisma } from "@/lib/prisma";

export const PRODUCTS_DATA = [
  {
    name: "Special Kanda Lasun Masala",
    slug: "special-kanda-lasun-masala",
    category: "masala",
    description:
      "A blend of dried onion and garlic with aromatic spices. Perfect for curries and gravies.",
    price: 29900,
    image:
      "https://source.unsplash.com/400x400/?indian,spice,masala,red",
    ingredients:
      "Dried Onion, Garlic, Red Chili, Coriander, Cumin, Turmeric, Fenugreek",
    howToUse:
      "Add 1-2 teaspoons to your curries. Mix with oil to make a paste for marinades.",
    benefits:
      "Rich in antioxidants. Aids digestion. No artificial preservatives.",
    inStock: true,
  },
  {
    name: "Bhaati Kanda Lasun",
    slug: "bhaati-kanda-lasun",
    category: "masala",
    description:
      "Traditional roasted onion and garlic blend. Adds authentic taste to everyday cooking.",
    price: 34900,
    image:
      "https://source.unsplash.com/400x400/?indian,spice,garlic",
    ingredients:
      "Roasted Onion, Roasted Garlic, Chili, Cumin, Coriander, Salt",
    howToUse:
      "Use in dal, rice dishes, and vegetable curries. Add during tempering.",
    benefits:
      "Enhances flavor. Improves digestion. 100% natural ingredients.",
    inStock: true,
  },
  {
    name: "Chicken Matan Masala",
    slug: "chicken-matan-masala",
    category: "masala",
    description:
      "Specially formulated masala for chicken dishes. Creates restaurant-quality taste at home.",
    price: 44900,
    image:
      "https://source.unsplash.com/400x400/?spice,blend,seasoning",
    ingredients:
      "Coriander, Cumin, Black Pepper, Cloves, Cinnamon, Bay Leaves, Ginger",
    howToUse:
      "Mix 2-3 tablespoons with yogurt for marinade. Cook for 30 minutes before grilling.",
    benefits:
      "Perfect for grilled and fried chicken. Tenderizes meat naturally.",
    inStock: true,
  },
  {
    name: "Malvani Masala",
    slug: "malvani-masala",
    category: "masala",
    description:
      "Coastal Maharashtrian spice blend. Essential for Malvani cuisine.",
    price: 39900,
    image:
      "https://source.unsplash.com/400x400/?spice,powder,mix",
    ingredients:
      "Dried Coconut, Chili, Coriander, Cumin, Turmeric, Garlic, Asafoetida",
    howToUse:
      "Add to fish curries, shrimp dishes, and seafood preparations.",
    benefits:
      "Authentic coastal flavor. Aids seafood digestion. Traditional recipe.",
    inStock: true,
  },
  {
    name: "Kala Masala",
    slug: "kala-masala",
    category: "masala",
    description:
      "Dark, aromatic blend with deep, complex flavors. For special occasions.",
    price: 54900,
    image:
      "https://source.unsplash.com/400x400/?dark,spice,traditional",
    ingredients:
      "Black Cardamom, Black Peppercorn, Cloves, Cinnamon, Bay Leaves, Star Anise",
    howToUse:
      "Use sparingly - 1/2 teaspoon per dish. Perfect for biryanis and pulaos.",
    benefits:
      "Premium blend. No additives. Brings out authentic flavors.",
    inStock: true,
  },
  {
    name: "Goda Masala",
    slug: "goda-masala",
    category: "masala",
    description:
      "Sweet and aromatic masala. The soul of Maharashtrian cuisine.",
    price: 39900,
    image:
      "https://source.unsplash.com/400x400/?spice,aromatic",
    ingredients:
      "Coriander, Cumin, Fenugreek, Dried Coconut, Sesame Seeds, Black Pepper",
    howToUse:
      "Add 1 tablespoon to dry vegetables. Use in dal-rice combinations.",
    benefits:
      "Sweet aroma. Traditional Maharashtrian recipe. Homemade quality.",
    inStock: true,
  },
  {
    name: "Misal Masala",
    slug: "misal-masala",
    category: "masala",
    description:
      "Specifically designed for Misal Pav. Brings authentic street food taste.",
    price: 29900,
    image:
      "https://source.unsplash.com/400x400/?spice,mix,blend",
    ingredients:
      "Chili, Coriander, Cumin, Turmeric, Cloves, Asafoetida, Salt",
    howToUse:
      "Add 2 tablespoons to boiled sprouts. Cook for authentic Misal.",
    benefits:
      "Perfect for Misal Pav. Budget-friendly. Traditional recipe.",
    inStock: true,
  },
  {
    name: "Lasun Chutney",
    slug: "lasun-chutney",
    category: "chutney",
    description:
      "Pungent garlic chutney. Traditional accompaniment to Indian meals.",
    price: 24900,
    image:
      "https://source.unsplash.com/400x400/?chutney,sauce,indian",
    ingredients:
      "Garlic, Red Chili, Lemon Juice, Salt, Oil, Mustard Seeds",
    howToUse:
      "Serve with rice, roti, or as a side dish. Use 1-2 teaspoons per meal.",
    benefits:
      "Aids digestion. Improves immunity. No preservatives added.",
    inStock: true,
  },
  {
    name: "Shingdana Chutney",
    slug: "shingdana-chutney",
    category: "chutney",
    description:
      "Peanut-based chutney with authentic Maharashtrian flavor. Crunchy and delicious.",
    price: 29900,
    image:
      "https://source.unsplash.com/400x400/?peanut,chutney,sauce",
    ingredients:
      "Roasted Peanuts, Red Chili, Coconut, Lemon Juice, Salt, Oil",
    howToUse:
      "Mix with yogurt for dip. Serve with rotli or as sandwich spread.",
    benefits:
      "Rich in protein. Protein-packed. Made with roasted peanuts.",
    inStock: true,
  },
  {
    name: "Kaju Chutney",
    slug: "kaju-chutney",
    category: "chutney",
    description:
      "Creamy cashew-based chutney. Perfect for festive occasions.",
    price: 39900,
    image:
      "https://source.unsplash.com/400x400/?cashew,cream,sauce",
    ingredients:
      "Roasted Cashews, Coconut, Red Chili, Lemon Juice, Salt, Oil",
    howToUse:
      "Serve as appetizer. Use as spread. Mix with rice for flavor.",
    benefits:
      "Premium ingredients. Rich and creamy. Special occasions staple.",
    inStock: true,
  },
  {
    name: "Javas Chutney",
    slug: "javas-chutney",
    category: "chutney",
    description:
      "Mixed vegetable chutney with complex flavors. Homemade authenticity.",
    price: 22900,
    image:
      "https://source.unsplash.com/400x400/?vegetable,sauce",
    ingredients:
      "Ginger, Garlic, Green Chili, Coriander, Cumin, Salt, Oil",
    howToUse:
      "Serve with meals. Mix with yogurt. Use as dipping sauce.",
    benefits:
      "No artificial colors. Traditional recipe. Budget-friendly.",
    inStock: true,
  },
  {
    name: "Kadipatta Chutney",
    slug: "kadipatta-chutney",
    category: "chutney",
    description:
      "Aromatic curry leaf chutney. South Indian touch to every meal.",
    price: 24900,
    image:
      "https://source.unsplash.com/400x400/?curry,leaf,green",
    ingredients:
      "Curry Leaves, Coconut, Red Chili, Lemon Juice, Salt, Oil",
    howToUse:
      "Serve with dosa, idli, or rice. Add to yogurt rice.",
    benefits:
      "Aids digestion. Fresh curry leaves. Traditional South Indian flavor.",
    inStock: true,
  },
];

export async function seedDatabase() {
  try {
    await prisma.product.deleteMany({});

    for (const product of PRODUCTS_DATA) {
      await prisma.product.create({
        data: product,
      });
    }

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}
