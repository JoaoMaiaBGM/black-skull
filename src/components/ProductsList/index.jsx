import Image from "next/image";
import BoxProduct from "../../assets/BoxProduct.svg";
import { ProductsContainer } from "./style";
import { scrollLeftProducts, scrollRightProducts } from "utils/lists";
import { data } from "database";
import { PrimaryButton } from "components/Buttons/primaryButton";
import { BaseList } from "components/List";

export function ProductsList() {
  return (
    <>
      <ProductsContainer>
        <BaseList
          utilsLeft={() => scrollLeftProducts()}
          utilsRight={() => scrollRightProducts()}
        >
          <ul className="carouselProducts">
            {data.map((product, key) => (
              <div className="productCardContainer" key={product.id}>
                <l1 className="productsItem">
                  <Image
                    className="productImage"
                    src={BoxProduct}
                    alt="Imagem de um produto da Black Skull"
                  />

                  <div className="product">
                    <div className="productInfo">
                      <p className="productDescription">{product.name}</p>
                    </div>

                    <div className="productSale">
                      <h2 className="productPrice">
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h2>
                      <span className="productPaymentCondition">
                        {"ou em 12x de R$29,16"}
                      </span>
                    </div>
                  </div>
                </l1>
                <PrimaryButton className="productButton">Comprar</PrimaryButton>
              </div>
            ))}
          </ul>
        </BaseList>
      </ProductsContainer>
    </>
  );
}
