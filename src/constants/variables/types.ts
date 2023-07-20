export interface IProduct  {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    products: any;
  }
  
  export interface ICategory {
    icon: string;
    name: string;
  }
  
  export type IProducts = IProduct[];
  export type ICategories = ICategory[];