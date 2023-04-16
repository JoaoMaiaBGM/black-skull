import styled from "styled-components";
import { theme } from "../../theme";

export const ProductsContainer = styled.div`
  width: 74rem;
  margin: 0 auto;

  .carouselProducts {
    width: 100%;
    display: flex;

    margin: 40px 0;

    flex-wrap: nowrap;
    overflow: hidden;

    gap: 25px;
  }

  .productCardContainer {
    button {
      width: 100%;

      background-color: inherit;
      color: white;

      transition: 0.4s;
    }
  }

  .productCardContainer:hover {
    button {
      background-color: ${theme.colors.orange1};
      color: ${theme.colors.dark1};
    }
  }

  .productsItem {
    width: 200px;
    height: 340px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 20px 30px;

    background-color: ${theme.colors.white};

    border: solid 1px ${theme.colors.gray3};

    transition: 0.4s ease;
  }

  .productsItem:hover {
    background-color: ${theme.colors.gray3};
  }

  .productImage {
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
