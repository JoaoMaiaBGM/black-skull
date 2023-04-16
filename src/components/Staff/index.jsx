import Image from "next/image";
import { StaffContainer, StaffButton } from "./style";
import card1 from "assets/Card1.svg";
import card2 from "assets/Card2.svg";
import card3 from "assets/Card3.svg";
import { BaseList } from "components/List";
import { PrimaryButton } from "components/Buttons/primaryButton";

export function Staff() {
  return (
    <>
      <StaffContainer>
        <div className="staffContent">
          <h1 className="staffTitle">
            Conheça a tropa {""}{" "}
            <span className="staffTitleHighlight">Black Skull</span>
          </h1>
          <BaseList>
            <ul className="staffList">
              <li className="staffListItem">
                <Image
                  src={card1}
                  alt="Imagem de pessoas em trajes esportivos"
                />
              </li>
              <li className="staffListItem">
                <Image
                  src={card2}
                  alt="Imagem de pessoas em trajes esportivos"
                />
              </li>
              <li className="staffListItem">
                <Image
                  src={card3}
                  alt="Imagem de pessoas em trajes esportivos"
                />
              </li>
            </ul>
          </BaseList>
        </div>
      </StaffContainer>
      <StaffButton>
        <PrimaryButton>Ver todos</PrimaryButton>
      </StaffButton>
    </>
  );
}
