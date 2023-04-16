import Image from "next/image";
import { BlogContainer } from "./style";
import blog1 from "assets/unsplash_blog1.svg";
import blog2 from "assets/unsplash_blog2.svg";
import blog3 from "assets/unsplash_blog3.svg";
import { BlogCard } from "components/BlogCard";
import { BaseList } from "components/List";
import { PrimaryButton } from "components/Buttons/primaryButton";

export function Blog() {
  return (
    <>
      <BlogContainer>
        <div className="blogContent">
          <div className="blogTitleContainer">
            <h1 className="blogTitle">
              Confira {""}{" "}
              <span className="blogTitleHighlight">nosso blog</span>
            </h1>
            <PrimaryButton>Ler todos</PrimaryButton>
          </div>

          <BaseList className="list">
            <ul className="blogList">
              <BlogCard
                className="blogListItem"
                image={blog1}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />

              <BlogCard
                className="blogListItem"
                image={blog2}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />

              <BlogCard
                className="blogListItem"
                image={blog3}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </ul>
          </BaseList>
        </div>
      </BlogContainer>
    </>
  );
}
