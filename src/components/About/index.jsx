import Image from "next/image";
import logo2 from "assets/Logo2.svg";
import { AboutContainer } from "./style";

export function About() {
  return (
    <AboutContainer>
      <div className="aboutImage">
        <Image src={logo2} alt="Logo marca da Blak Skull" />
      </div>

      <div className="aboutContentContainer">
        <h1 className="aboutTitle">Sobre a Black Skull</h1>
        <p className="aboutContent">
          A Black Skull USA é uma marca de suplementos alimentares com foco em
          atletas de alta performance. Nossa sede no Brasil está alocada em Embu
          das Artes – SP, com mais de 12.000 m² de área construída, com alta
          capacidade produtiva. Nossos produtos trabalham com as melhores
          matérias-primas do mercado e tem como principal característica maior
          concentração de insumos, que proporcionam níveis de pureza mais altos
          e por consequência otimizam a qualidade de nossos produtos.
        </p>
      </div>
    </AboutContainer>
  );
}
