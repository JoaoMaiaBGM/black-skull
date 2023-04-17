import { SlArrowUp } from "react-icons/sl";
import { ScrollToTop } from "utils/scroll";
import { PrimaryButton } from "./primaryButton";
import { ScrollToTopButtonContainer } from "./style";
import { BsChatRightDotsFill } from "react-icons/bs";

export function ScrollToTopButton() {
  return (
    <ScrollToTopButtonContainer>
      <button
        type="button"
        className="backToTopButton"
        onClick={() => ScrollToTop()}
      >
        <SlArrowUp className="arrowUp" />
      </button>
      <PrimaryButton> {<BsChatRightDotsFill />} Fale conosco</PrimaryButton>
    </ScrollToTopButtonContainer>
  );
}
