import styled from "styled-components";
import { theme } from "../../theme";

export const ParentContainer = styled.div`
  width: 275px;
  height: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px 40px;

  background-color: ${theme.colors.white};

  border: solid 1px ${theme.colors.gray3};

  img {
    width: 180px;
    height: 180px;
  }

  .product {
    align-self: flex-start;
  }

  .productInfo {
    width: 90%;
    margin-bottom: 20px;

    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    text-transform: uppercase;

    color: ${theme.colors.black1};
  }

  .productPrice {
    margin-bottom: 4px;

    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;

    color: ${theme.colors.orange1};
  }

  .productPaymentCondition {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: ${theme.colors.dark3};
  }
`;
