export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { count: number; rate: number };
};

export type CategoryType = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];
