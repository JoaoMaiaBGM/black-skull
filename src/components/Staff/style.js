import styled from "styled-components";
import { theme } from "../../theme";

export const StaffContainer = styled.div`
  width: 100%;
  height: 72.5vh;

  display: flex;
  align-items: center;

  background-image: url("/unsplash_section_staff.svg");
  background-position: center;
  background-size: cover;

  .staffContent {
    width: fit-content;

    display: flex;
    flex-direction: column;

    margin: 0 auto;

    gap: 24px;
  }

  .staffTitle {
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 35px;
    line-height: 47px;

    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .staffTitleHighlight {
    color: ${theme.colors.orange1};
  }

  .staffList {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
