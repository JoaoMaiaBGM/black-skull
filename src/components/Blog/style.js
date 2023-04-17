import styled from "styled-components";
import { theme } from "../../theme";

export const BlogContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

  background-image: ${theme.colors.gradiente_dark};
  background-position: center;
  background-size: cover;

  .blogContent {
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    gap: 24px;
  }

  .blogTitleContainer {
    width: 95%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .blogTitle {
    margin: 0 60px;

    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 30px;

    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .blogTitleHighlight {
    color: ${theme.colors.orange1};
  }

  .blogList {
    margin: 0 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
  }

  .blogListItem {
    display: flex;

    position: relative;
    transition: 0.3s;
  }
`;
