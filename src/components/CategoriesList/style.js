import styled from "styled-components";
import { theme } from "../../theme";

export const CategoriesContainer = styled.div`
  margin: 0 auto;
  padding: 0 68px;

  display: flex;
  align-items: center;

  .iconLeft {
    margin: 0 -25px 0 0;
    border: none;
    border-radius: 4px;

    font-size: 32px;

    z-index: 2;

    cursor: pointer;
  }

  .iconRight {
    margin: 0 0 0 -25px;

    border: none;
    border-radius: 4px;

    font-size: 32px;

    z-index: 2;

    cursor: pointer;
  }

  .carouselCategories {
    width: 100%;
    display: flex;

    margin: 40px 0;

    padding: 0 40px 10px 40px;

    flex-wrap: nowrap;
    overflow-x: hidden;

    gap: 20px;
  }

  .categorieItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    text-align: center;
    text-transform: uppercase;

    color: ${theme.colors.dark1};
  }
`;
