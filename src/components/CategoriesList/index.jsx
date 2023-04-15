import { ParentCategorie } from "../ParentCategories";
import { CategoriesContainer } from "./style";
import bagProduct from "../../assets/BagProduct.svg";

export function CategoriesList() {
  return (
    <CategoriesContainer id="categorias">
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
    </CategoriesContainer>
  );
}
