import styled from "styled-components";
import { theme } from "../../theme";

export const ParentContainer = styled.div`
  width: 158px;
  height: 158px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.gray3};

  border: none;
  border-radius: 50%;

  img {
    width: 100px;
    height: 100px;
  }
`;
