import Image from "next/image";
import { PrimaryButton } from "components/Buttons/primaryButton";
import blog1 from "assets/unsplash_blog1.svg";
import { BlogCardContainer } from "./style";
import { BsBoxArrowUpRight } from "react-icons/bs";

export function BlogCard({ image, text }) {
  // Gerando data para exemplificar na postagem
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <BlogCardContainer>
      <div className="blogCardImageContainer">
        <Image
          className="blogCardImage"
          src={blog1}
          alt="Imagem referente a postagem no blog"
        />
      </div>

      <div className="blogCardContent">
        <span className="blogDate">{`${month}.${day}.${year}`}</span>

        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="blogCardButtons">
          <PrimaryButton>Ler mais</PrimaryButton>
          <BsBoxArrowUpRight className="arrowSquareOut" />
        </div>
      </div>
    </BlogCardContainer>
  );
}
