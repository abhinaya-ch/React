export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo';
  category: 'luxury' | 'affordable' | 'investment';
  imageUrl: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'agent';
}