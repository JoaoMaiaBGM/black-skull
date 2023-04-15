import styled from "styled-components";
import { theme } from "../../theme";

export const ParentContainer = styled.div`
  width: 178px;
  height: 178px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.gray3};

  border: none;
  border-radius: 50%;

  img {
    width: 108px;
    height: 108px;
  }
`;
