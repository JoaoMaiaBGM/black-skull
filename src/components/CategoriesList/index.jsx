import { ParentCategorie } from "../ParentCategories";
import { CategoriesContainer } from "./style";
import bagProduct from "../../assets/BagProduct.svg";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { scrollLeft, scrollRight } from "utils/lists";

export function CategoriesList() {
  return (
    <CategoriesContainer id="categorias">
      {/* Left icon */}
      <BsArrowLeftSquareFill
        className="iconLeft"
        aria-label="left-arrow"
        onClick={() => scrollLeft()}
      />

      <ul className="carouselCategories">
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Proteínas
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Hipercalóricos
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Creatina
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Packs
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Aminoácidos
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Saúde
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Colágeno
        </l1>
        <l1 className="categorieItem">
          <ParentCategorie image={bagProduct} /> Pré-treino
        </l1>
      </ul>

      {/* Right icon */}

      <BsArrowRightSquareFill
        className="iconRight"
        aria-label="right-arrow"
        onClick={() => scrollRight()}
      />
    </CategoriesContainer>
  );
}
