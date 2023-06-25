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
  category: "men" | "women" | "junior" | "search";
  query?: string;
}

export interface ProductListingProps {
  id: string;
  image: string;
  name: string;
  price: number;
}
