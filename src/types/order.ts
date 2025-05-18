export interface Order {
  id: string;
  date: string;
  items: Array<{ productId: string; quantity: number; unitPrice: number }>;
  total: number;
} 
