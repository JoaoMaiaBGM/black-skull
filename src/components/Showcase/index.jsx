import { CategoriesList } from "components/CategoriesList";
import { ProductsList } from "components/ProductsList";
import { CategoriesContainer } from "./style";

export function Showcase() {
  return (
    <>
      <CategoriesContainer>
        <CategoriesList />
        <h2 className="showCaseTitle">Lançamentos</h2>
        <ProductsList />
      </CategoriesContainer>
    </>
  );
}
