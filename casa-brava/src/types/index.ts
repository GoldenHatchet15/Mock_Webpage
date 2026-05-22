export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  seating: string;
  specialRequest: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}