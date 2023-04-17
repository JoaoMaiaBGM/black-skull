import styled from "styled-components";
import { theme } from "../../theme";

export const BlogCardContainer = styled.li`
  width: 350px;

  border: solid 1px ${theme.colors.dark3};
  border-radius: 2px;

  background-color: ${theme.colors.dark1};

  .blogCardImageContainer {
    width: 100%;
    height: 194px;

    overflow: hidden;
    position: relative;
  }

  &&:hover {
    .blogCardImage {
      transition: 0.3s ease;
      transform: scale(1.1);
    }

    .arrowSquareOut {
      transition: 0.3 ease;
      margin-left: 20px;
    }
  }

  .blogCardContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    gap: 15px;

    padding: 24px;
  }

  .blogDate {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;

    color: ${theme.colors.gray2};
  }

  .content {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .blogCardButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .arrowSquareOut {
    margin-left: -28px;

    padding: 8px;

    color: ${theme.colors.orange1};

    cursor: pointer;
  }
`;
