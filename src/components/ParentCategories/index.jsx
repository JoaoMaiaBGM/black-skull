import Image from "next/image";
import { ParentContainer } from "./style";

export function ParentCategorie({ children, image }) {
  return (
    <>
      <ParentContainer>
        <Image src={image} alt="Imagem de um produto da Black Skull" />
        {children}
      </ParentContainer>
    </>
  );
}
