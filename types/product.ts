export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  image: string;
  ingredients: string;
  howToUse?: string;
  benefits?: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  product?: Product;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  total: number;
  status: string;
  paymentId?: string;
  address: string;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product?: Product;
  createdAt: string;
}
