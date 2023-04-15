import Image from "next/image";
import { ParentContainer } from "./style";

export function ParentProduct({ image, description, price, paymentCondition }) {
  return (
    <>
      <ParentContainer>
        <Image src={image} alt="Imagem de um produto da Black Skull" />

        <div className="product">
          <div className="productInfo">
            <p className="productDescription">{description}</p>
          </div>

          <div className="productSale">
            <h2 className="productPrice">{price}</h2>
            <span className="productPaymentCondition">{paymentCondition}</span>
          </div>
        </div>
      </ParentContainer>
    </>
  );
}
