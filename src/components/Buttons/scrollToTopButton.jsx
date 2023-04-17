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
        class="backToTopButton"
        onClick={() => ScrollToTop()}
      >
        <SlArrowUp class="arrowUp" />
      </button>
      <PrimaryButton> {<BsChatRightDotsFill />} Fale conosco</PrimaryButton>
    </ScrollToTopButtonContainer>
  );
}
