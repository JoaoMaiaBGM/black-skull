import Image from "next/image";
import { StaffContainer } from "./style";
import card1 from "assets/Card1.svg";
import card2 from "assets/Card2.svg";
import card3 from "assets/Card3.svg";

export function Staff() {
  return (
    <StaffContainer>
      <div className="staffContent">
        <h1 className="staffTitle">
          Conheça a tropa {""}{" "}
          <span className="staffTitleHighlight">Black Skull</span>
        </h1>
        <ul className="staffList">
          <li>
            <Image src={card1} />
          </li>
          <li>
            <Image src={card2} />
          </li>
          <li>
            <Image src={card3} />
          </li>
        </ul>
      </div>
    </StaffContainer>
  );
}
