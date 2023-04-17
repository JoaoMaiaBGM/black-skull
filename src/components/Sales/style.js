import styled from "styled-components";
import { theme } from "../../theme";

export const SalesContainer = styled.div`
  margin: 0 0 40px 0;

  flex-wrap: nowrap;
  overflow-x: hidden;

  gap: 20px;

  .salesTitle {
    margin-top: 40px;
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    text-align: center;
    text-transform: uppercase;

    color: ${theme.colors.dark1};
  }
`;
