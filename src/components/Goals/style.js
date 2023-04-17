import styled from "styled-components";
import { theme } from "../../theme";

export const GoalsContainer = styled.div`
  margin: 64px;

  .goalsTitle {
    margin-bottom: 24px;

    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    text-align: center;
    text-transform: uppercase;

    color: ${theme.colors.dark1};
  }

  .goalsList {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .goalsCard {
    width: 277px;
    height: 350px;

    overflow: hidden;
    position: relative;
  }

  .goalsCard:hover {
    .goalTag {
      background-color: ${theme.colors.orange2};
    }

    .goalImage {
      transition: 0.2s;
      transform: scale(1.1);
      filter: grayscale(0%);
    }
  }

  .goalImage {
    width: 100%;
    height: 350px;
    filter: grayscale(100%);
  }

  .goalTag {
    width: 215px;
    height: 40px;

    padding-left: 16px;
    margin-top: -42px;

    display: flex;
    align-items: center;

    position: absolute;

    border-radius: none;
    border: solid 1px transparent;

    font-family: ${theme.fonts.barlow};
    font-style: italic;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;

    background-color: ${theme.colors.orange1};
    color: ${theme.colors.black1};

    border: ${theme.colors.orange1};
  }
`;
