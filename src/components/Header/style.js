import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-height: 104px;

  position: fixed;
  z-index: 999;

  margin-top: -100px;

  .headerTop {
    width: 100%;
    height: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px 70px;
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

    padding: 10px 65px;
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
  }

  .navbarLink {
    height: 72px;

    display: flex;
    align-items: center;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
    text-transform: uppercase;

    font-weight: 700;
    font-size: 14px;

    color: ${theme.colors.gray1};
    padding: 0 10px;

    position: relative;
    transition: 0.3s;
  }

  .navbarLink::after {
    content: "";
    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;

    position: absolute;
    bottom: 0;
  }

  .navbarLink:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.dark3};
  }

  .navbarLink:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: ${theme.colors.orange1};

    margin-left: -10px;
  }

  .input {
    width: 216px;
    height: 35px;

    background: ${theme.colors.dark1};

    border: 1px solid ${theme.colors.dark3};
    border-radius: 4px;

    padding: 0 15px;
  }

  .iconContainer {
    display: flex;
    flex-direction: row;

    gap: 10px;

    color: ${theme.colors.gray1};

    font-size: 22px;

    cursor: pointer;
  }

  svg:hover {
    color: ${theme.colors.white};
  }
`;
