import styled from "styled-components";
import { theme } from "../../theme";

export const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  .icon {
    margin-top: -15px;
    padding: 5px;

    border: none;
    border-radius: 4px;

    font-size: 22px;

    color: ${theme.colors.black2};
    background-color: ${theme.colors.gray2};

    z-index: 2;

    transition: 0.3s;
    cursor: pointer;
  }

  .icon:hover {
    background-color: ${theme.colors.orange2};
  }
`;
