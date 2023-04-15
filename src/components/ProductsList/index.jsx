import { ParentProduct } from "components/ParentProducts";
import { ProductsContainer } from "./style";
import BoxProduct from "../../assets/BoxProduct.svg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { scrollLeft, scrollRight } from "utils/lists";

export function ProductsList() {
  return (
    <ProductsContainer id="promocoes">
      {/* Left icon */}
      <HiArrowLeft
        className="icon"
        aria-label="left-arrow"
        onClick={() => scrollLeft()}
      />

      <ul className="carouselProducts">
        <l1 className="productsItem">
          <ParentProduct
            image={BoxProduct}
            description={"Whey zero (com lactase) Black Skull-900g"}
            price={"R$349,90"}
            paymentCondition={"ou 12x de R$29,16"}
          />
        </l1>
      </ul>

      {/* Right icon */}
      <HiArrowRight
        className="icon"
        aria-label="right-arrow"
        onClick={() => scrollRight()}
      />
    </ProductsContainer>
  );
}
