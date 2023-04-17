import styled from "styled-components";
import { theme } from "../../theme";

export const BenefitsContainer = styled.div`
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;

  gap: 20px;

  .container {
    width: 470px;
    height: 270px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 35px;

    background-image: ${theme.colors.gradiente_dark};
  }

  .container:hover {
    .spinClockWise {
      transition: 0.5s;
      margin-top: 10px;
      transform: rotateZ(75deg);
    }

    .spinCounterClockWise {
      transition: 0.5s;
      margin-top: 10px;
      transform: rotateZ(-170deg);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    gap: 24px;
  }

  .title {
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 29px;
    line-height: 38px;
    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .subtitle {
    color: ${theme.colors.orange1};
  }

  .icon {
    margin-top: 40px;

    img {
      width: 10rem;
    }
  }
`;
