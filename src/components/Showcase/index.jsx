import { CategoriesList } from "components/CategoriesList";
import { scrollLeft, scrollRight } from "utils/lists";
import { CategoriesContainer } from "./style";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export function Showcase() {
  return (
    <>
      <CategoriesContainer>
        <CategoriesList />
      </CategoriesContainer>
    </>
  );
}
