import styled from "styled-components";
import { theme } from "../../theme";

export const PrimaryButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 6px;
  border: solid 1px transparent;
  padding: 12px 22px;

  font-family: ${theme.fonts.barlow};
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;

  cursor: pointer;

  background-color: ${theme.colors.orange1};
  color: ${theme.colors.black1};

  border: ${theme.colors.orange1};

  &&:hover {
    background-color: ${theme.colors.orange2};
  }
`;
