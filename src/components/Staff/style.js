import styled from "styled-components";
import { theme } from "../../theme";

export const StaffContainer = styled.div`
  width: 100%;
  height: 73vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    margin: 0 60px;

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
    margin: 0 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
  }

  .staffListItem {
    display: flex;

    position: relative;
    transition: 0.3s;
  }

  .staffListItem::after {
    content: "Cedric MacMillan";

    width: 86%;
    height: 80px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;

    position: absolute;
    bottom: 0;
  }

  .staffListItem:hover {
    color: ${theme.colors.orange1};
    font-family: ${theme.fonts.robotoCondensed};
  }

  .staffListItem:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: rgba(28, 28, 30, 0.95);

    padding: 20px;
  }
`;

export const StaffButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -25px;
`;
