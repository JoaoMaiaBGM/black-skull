import styled from "styled-components";
import { theme } from "../../theme";

export const HeroContainer = styled.div`
  width: 100%;
  height: 75vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url("/unsplash_hero.svg");
  background-position: center;
  background-size: cover;

  margin-top: 100px;

  .heroContent {
    width: 500px;

    margin-left: 100px;
  }

  .heroTitle {
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .heroTitleHighlight {
    color: ${theme.colors.orange1};
  }

  .heroSubtitle {
    width: 70%;
    margin-top: 20px;
    margin-bottom: 40px;

    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    text-align: left;

    color: ${theme.colors.white};
  }
`;
