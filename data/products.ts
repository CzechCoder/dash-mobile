export interface Products {
  id: number;
  name: string;
  stock: number;
  img: string;
}

export const PRODUCTS: Products[] = [
  {
    id: 1,
    name: "Formula 1 car",
    stock: 124,
    img: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Baseball cap",
    stock: 250,
    img: "http://tomasburian.com/dev/cdn/mclaren-store/02.jpg",
  },
  {
    id: 3,
    name: "F1 Team orange t-shirt",
    stock: 352,
    img: "http://tomasburian.com/dev/cdn/mclaren-store/03.jpg",
  },
];
