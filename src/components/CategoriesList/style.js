import styled from "styled-components";
import { theme } from "../../theme";

export const CategoriesContainer = styled.div`
  ul {
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
