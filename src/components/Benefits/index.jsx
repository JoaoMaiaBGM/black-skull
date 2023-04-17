import { PrimaryButton } from "components/Buttons/primaryButton";
import Image from "next/image";
import { BenefitsContainer } from "./style";
import packageIcon from "assets/Package.svg";
import cashbackIcon from "assets/cashback.svg";

export function Benefits() {
  return (
    <BenefitsContainer>
      <div className="container">
        <div className="content">
          <h2 className="title">
            Garanta o {""} <span className="subtitle">frete grátis</span>
          </h2>
          <PrimaryButton>Consulte</PrimaryButton>
        </div>

        <div className="icon spinClockWise">
          <Image src={packageIcon} alt="Um desenho de uma caixa" />
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2 className="title">
            Seu dinheiro {""}
            <span className="subtitle">de volta</span>
          </h2>
          <PrimaryButton>Entenda</PrimaryButton>
        </div>

        <div className="icon spinCounterClockWise">
          <Image src={cashbackIcon} alt="Um desenho de um cifrão de dolar" />
        </div>
      </div>
    </BenefitsContainer>
  );
}
