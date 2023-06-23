import { SVGProps } from "../../types";

const MenuSVG = (props: SVGProps) => {
  return (
    <svg
      className="menuSVG"
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || 32}
      viewBox="0 -960 960 960"
      width={props.size || 32}
    >
      <path
        fill={props.color}
        d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
      />
    </svg>
  );
};

export default MenuSVG;
