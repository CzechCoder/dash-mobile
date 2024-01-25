export interface Product {
  id?: number;
  name: string;
  price: string;
  stock: string;
  available?: boolean;
  img: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Customer {
  name: string;
  email: string;
  address?: string;
  phone?: string;
  orders?: number[];
  createdAt?: string;
  updatedAt?: string;
}
