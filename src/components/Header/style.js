import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderContainer = styled.header`
  max-width: 100vw;
  max-height: 104px;

  margin-bottom: 10px;

  .headerTop {
    width: 100%;
    height: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px 50px;
    background-color: ${theme.colors.dark1};
  }

  .headerTop h3 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: ${theme.colors.orange1};

    text-transform: uppercase;
  }

  .headerTop p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: ${theme.colors.gray2};

    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    text-transform: uppercase;
  }

  .deliveryPrice {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;
  }

  .truckIcon {
    font-size: 18px;
    color: ${theme.colors.orange1};
  }

  .navbarContainer {
    width: 100%;
    height: 72px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px 45px;
    border-bottom: solid 1px ${theme.colors.dark3};

    background-color: ${theme.colors.black2};
  }

  .navbarBrand {
    width: 150px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style: none;

    padding-left: 0;
  }

  .navbarItem {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
    text-transform: uppercase;

    font-weight: 700;
    font-size: 12px;

    color: ${theme.colors.gray1};

    padding: 29px 12px;
  }

  .navbarItem:hover {
    transition: 0.3s;
    color: ${theme.colors.white};
    background-color: ${theme.colors.dark3};

    padding: 29px 12px;

    border-bottom: ${theme.colors.orange2};
  }

  .input {
    height: 40px;

    background: ${theme.colors.dark1};

    border: 1px solid ${theme.colors.dark3};
    border-radius: 4px;

    padding: 0 25px;
  }

  .iconContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 15px;

    color: ${theme.colors.gray1};

    font-size: 21px;
  }
`;
