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

export const ScrollToTopButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  bottom: 45px;
  right: 20px;

  gap: 8px;

  position: fixed;

  cursor: pointer;
  z-index: 9999;

  .backToTopButton {
    width: 50px;
    height: 50px;

    background-color: ${theme.colors.dark3};
    color: ${theme.colors.white};

    border: solid 1px ${theme.colors.gray1};
    border-radius: 8px;

    cursor: pointer;
    z-index: 9999;
  }

  button {
    width: 130px;
    height: 40px;

    padding: 3px;

    font-family: ${theme.fonts.barlow};
    font-weight: 700;
    font-size: 12px;

    text-align: center;

    color: ${theme.colors.black2};
  }
`;
