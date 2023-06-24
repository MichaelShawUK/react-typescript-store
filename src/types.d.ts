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
