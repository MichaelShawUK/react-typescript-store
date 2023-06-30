import { SizePickerProps } from "../types";
import StyledSizePicker from "../css/StyledSizePicker";

const SizePicker = (props: SizePickerProps) => {
  const menSizes = [6, 6.5, 7, 7.5, 8, 9, 10, 11, 12];
  const womenSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
  const juniorSizes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  let sizes: number[] = [];

  switch (props.category) {
    case "men":
      sizes = menSizes;
      break;
    case "women":
      sizes = womenSizes;
      break;
    case "junior":
      sizes = juniorSizes;
  }

  return (
    <StyledSizePicker>
      Choose size:
      <div className="tiles">
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`tile ${props.size === size ? "selected" : ""}`}
            onClick={(e) => {
              const chosenSize = (e.target as HTMLDivElement).textContent;
              if (chosenSize) {
                props.setSize(+chosenSize);
              }
            }}
          >
            {size}
          </div>
        ))}
      </div>
    </StyledSizePicker>
  );
};

export default SizePicker;
