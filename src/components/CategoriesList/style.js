import styled from "styled-components";
import { theme } from "../../theme";

export const CategoriesContainer = styled.div`
  width: 70.9rem;
  margin: 0 auto;

  display: flex;
  align-items: center;

  .icon {
    margin-top: -15px;
    padding: 5px;

    border: none;
    border-radius: 4px;

    font-size: 22px;

    color: ${theme.colors.black2};
    background-color: ${theme.colors.gray2};

    z-index: 2;

    transition: 0.3s;
    cursor: pointer;
  }

  .icon:hover {
    background-color: ${theme.colors.orange2};
  }

  .carouselCategories {
    width: 100%;
    display: flex;

    margin: 40px 0;

    flex-wrap: nowrap;
    overflow: hidden;

    gap: 25px;
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
