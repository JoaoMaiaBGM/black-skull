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
    width: 178px;
    height: 178px;

    padding: 40px;

    z-index: 2;
  }

  &&:hover {
    transition: 0.9s ease-out;
    background-color: ${theme.colors.orange1};
  }

  img:hover {
    transition: 0.8s;
    width: 230px;
    height: 230px;
  }
`;
