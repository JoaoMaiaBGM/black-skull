import { CategoriesList } from "components/CategoriesList";
import { CategoriesContainer } from "./style";

export function Showcase() {
  return (
    <>
      <CategoriesContainer>
        <CategoriesList />
      </CategoriesContainer>
    </>
  );
}
