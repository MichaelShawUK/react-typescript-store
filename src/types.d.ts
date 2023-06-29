export interface ProductType {
  id: string;
  name: string;
  brand: string;
  category: "men" | "women" | "junior";
  colour: string;
  description: string;
  image: string;
  images: string[];
  price: number;
}

export interface SVGProps {
  size?: number;
  color?: string;
  onClick?: () => void;
}

export interface SearchBarProps {
  className: string;
}

export interface SlideshowDataType {
  collection: string;
  image: string;
  link: string;
}

export interface ProductRangeProps {
  products: ProductType[];
}

export interface ProductListingProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

export interface ProductFilterProps {
  category?: "men" | "women" | "junior";
}

export interface DynamicProperty {
  [key: string]: number;
}

export interface FilterProperties {
  category: DynamicProperty;
  brand: DynamicProperty;
  colour: DynamicProperty;
}
