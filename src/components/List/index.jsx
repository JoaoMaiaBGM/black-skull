import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IconsContainer } from "./style";

export function BaseList({ children, utilsLeft, utilsRight }) {
  return (
    <IconsContainer>
      {/* Left icon */}
      <HiArrowLeft
        className="icon"
        aria-label="left-arrow"
        onClick={utilsLeft}
      />
      {children}
      {/* Right icon */}
      <HiArrowRight
        className="icon"
        aria-label="right-arrow"
        onClick={utilsRight}
      />
    </IconsContainer>
  );
}
