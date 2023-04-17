import Image from "next/image";
import goals1 from "assets/unsplash_objective1_color.png";
import goals2 from "assets/unsplash_objective2_color.png";
import goals3 from "assets/unsplash_objective3_color.png";
import goals4 from "assets/unsplash_objective4_color.png";
import { GoalsContainer } from "./style";

export function Goals() {
  return (
    <GoalsContainer>
      <h1 className="goalsTitle">Objetivos</h1>

      <div className="goalsCardsContainer">
        <ul className="goalsList">
          <li className="goalsCard">
            <div>
              <Image
                className="goalImage"
                src={goals1}
                alt="Imagem de pessoas se exercitando"
              />
              <div className="goalTag">Ganho de massa</div>
            </div>
          </li>

          <li className="goalsCard">
            <div>
              <Image
                className="goalImage"
                src={goals2}
                alt="Imagem de pessoas se exercitando"
              />
              <div className="goalTag">Energia</div>
            </div>
          </li>

          <li className="goalsCard">
            <div>
              <Image
                className="goalImage"
                src={goals3}
                alt="Imagem de pessoas se exercitando"
              />
              <div className="goalTag">Recuperação muscular</div>
            </div>
          </li>

          <li className="goalsCard">
            <div>
              <Image
                className="goalImage"
                src={goals4}
                alt="Imagem de pessoas se exercitando"
              />
              <div className="goalTag">Emagrecimento</div>
            </div>
          </li>
        </ul>
      </div>
    </GoalsContainer>
  );
}
