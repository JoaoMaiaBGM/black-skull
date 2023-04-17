import { ParentCategorie } from "../ParentCategories";
import { CategoriesContainer } from "./style";
import bagProduct from "../../assets/BagProduct.svg";
import { scrollLeftCategories, scrollRightCategories } from "utils/lists";
import { BaseList } from "components/List";

export function CategoriesList() {
  return (
    <CategoriesContainer>
      <BaseList
        utilsLeft={() => scrollLeftCategories()}
        utilsRight={() => scrollRightCategories()}
      >
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
      </BaseList>
    </CategoriesContainer>
  );
}
