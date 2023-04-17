import styled from "styled-components";
import { theme } from "../../theme";

export const FooterContainer = styled.div`
  width: 100%;
  height: 588px;

  padding: 45px;

  background-color: ${theme.colors.black2};

  .footerContainerTop {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .footerTopLeft {
    width: 70%;
    display: flex;
    flex-direction: column;

    gap: 45px;
  }

  .footerTopLeftTop {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    gap: 42px;
  }

  .logosAndIcons {
    width: 245px;
    height: 161px;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .logoBlackSkull {
    width: 245px;
    height: 72px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .followUs {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    .followUsTitle {
      font-family: ${theme.fonts.barlow};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;

      margin-bottom: 15px;

      text-align: center;

      color: ${theme.colors.white};
    }

    .followUsIcons {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 10px;

      .iconsContainer {
        width: 25px;
        height: 25px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background-color: ${theme.colors.white};

        cursor: pointer;
      }
    }
  }

  .sectionContainer {
    width: 170px;
  }

  .sectionsTitle {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;

    margin-bottom: 15px;

    color: ${theme.colors.white};
  }

  .sectionLinkItem {
    margin-bottom: 14px;
  }

  .link {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: ${theme.colors.gray1};
  }

  .footerTopLeftBottom {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    margin-left: 110px;

    gap: 48px;
  }

  .securitySectionCertificates {
    display: flex;
    flex-direction: row;

    align-content: flex-start;

    gap: 10px;
  }

  .footerTopRight {
    width: 25%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 0px 40px 60px 40px;

    border-left: solid 1px ${theme.colors.gray1};
  }

  .footerTopRightTitle {
    font-family: ${theme.fonts.robotoCondensed};
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;

    color: ${theme.colors.white};
  }

  .subTitle {
    color: ${theme.colors.orange1};
  }

  .footerTopRightContent {
    font-family: ${theme.fonts.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${theme.colors.gray1};
  }

  .footerTopRightInputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
  }

  .footerTopRightInput {
    height: 46px;
    background: ${theme.colors.dark1};

    border: 1px solid ${theme.colors.dark3};
    border-radius: 4px;

    color: ${theme.colors.white};

    padding: 0 16px;
  }

  .footerContainerBottom {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    border-top: 1px solid ${theme.colors.gray1};
    padding: 30px 10px;
  }

  .footerBottomRights {
    p {
      font-family: ${theme.fonts.barlow};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: ${theme.colors.white};
    }
  }

  .footerBottomLogos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: 0 30px;

    gap: 40px;
  }
`;
