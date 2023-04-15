import styled from "styled-components";
import { theme } from "../../theme";

export const CategoriesContainer = styled.div`
  ul {
    width: 100%;
    display: flex;

    margin: 40px 0;

    padding: 0 40px 10px 40px;

    flex-wrap: nowrap;
    overflow-x: hidden;

    gap: 20px;
  }
`;
