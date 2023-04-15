import styled from "styled-components";
import { theme } from "../../theme";

export const PrimaryButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 8px;
  border: solid 1px transparent;
  padding: 14px 24px;

  font-family: ${theme.fonts.barlow};
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  gap: 10px;

  cursor: pointer;

  background-color: ${theme.colors.orange1};
  color: ${theme.colors.black1};

  border: ${theme.colors.orange1};
`;
