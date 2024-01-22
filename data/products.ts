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
    img: "https://www.shutterstock.com/image-photo/moscow-russia-june-13-2015-classic-286752986",
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
