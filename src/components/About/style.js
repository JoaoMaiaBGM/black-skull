import styled from "styled-components";
import { theme } from "../../theme";

export const AboutContainer = styled.div`
  width: 643px;

  margin: 40px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .aboutImage {
    width: 160px;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .aboutContentContainer {
    margin-top: -70px;
  }

  .aboutTitle {
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    text-align: center;
    text-transform: uppercase;

    margin-bottom: 30px;

    color: ${theme.colors.dark1};
  }

  .aboutContent {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    text-align: center;

    color: ${theme.colors.dark3};
  }
`;
