import styled from "styled-components";
import { theme } from "../../theme";

export const CategoriesContainer = styled.div`
  width: 72rem;
  margin: 0 auto;

  .carouselCategories {
    width: 100%;
    display: flex;

    margin: 40px 0;

    flex-wrap: nowrap;
    overflow: hidden;

    gap: 29px;
  }

  .categorieItem {
    display: flex;
    flex-direction: column;
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
