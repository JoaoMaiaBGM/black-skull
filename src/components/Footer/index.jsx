import { PrimaryButton } from "components/Buttons/primaryButton";
import Image from "next/image";
import logo from "assets/Logo.svg";
import logoWicomm from "assets/Logo_Wicomm.svg";
import logoVtex from "assets/Logo_vtex.svg";
import vtexCertificate from "assets/vtex_certificate.svg";
import ebitCertificate from "assets/ebit_certificate.svg";
import creditCardFlags from "assets/credit_cards_flags.svg";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { FooterContainer } from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <div className="footerContainerTop">
        <div className="footerTopLeft">
          <div className="footerTopLeftTop">
            <div className="logosAndIcons">
              <div className="logoBlackSkull">
                <Image src={logo} alt="Logo da Black Skull" />
              </div>

              <div className="followUs">
                <h2 className="followUsTitle">Nos siga:</h2>
                <div className="followUsIcons">
                  <div className="iconsContainer">
                    <FaFacebookF />
                  </div>
                  <div className="iconsContainer">
                    <FaInstagram />
                  </div>
                  <div className="iconsContainer">
                    <FaTiktok />
                  </div>
                  <div className="iconsContainer">
                    <FaYoutube />
                  </div>
                  <div className="iconsContainer">
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>

            <div className="sectionContainer">
              <h3 className="sectionsTitle">Black Skull USA</h3>
              <ul className="sectionsLinks">
                <li className="sectionLinkItem">
                  <a className="link" href={"/#sobre_nos"}>
                    Sobre nós
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#confianca"}>
                    Black Skull é confiável
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#atletas"}>
                    Atletas Black Skull
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#blog"}>
                    Nosso Blog
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#revendedor"}>
                    Seja um Revendedor
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#contato"}>
                    Entre em Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="sectionContainer">
              <h3 className="sectionsTitle">Institucional</h3>
              <ul className="sectionsLinks">
                <li className="sectionLinkItem">
                  <a className="link" href={"/#trocas_e_devolucoes"}>
                    Trocas e Devoluções
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#politica_de_entregas"}>
                    Política de Entregas
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#politica_de_privacidade"}>
                    Política de Privacidade
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#politica_de_cancelamentos"}>
                    Política de Cancelamentos
                  </a>
                </li>
              </ul>
            </div>

            <div className="sectionContainer">
              <h3 className="sectionsTitle">Afiliados</h3>
              <ul className="sectionsLinks">
                <li className="sectionLinkItem">
                  <a className="link" href={"/#afiliados"}>
                    Programa de Afiliados
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#descontos"}>
                    Desconto para Militares
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#beneficios_profissionais_saude"}>
                    Benefícios para Profissionais da Saúde
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a
                    className="link"
                    href={"/#beneficios_prof_educacao_fisica"}
                  >
                    Benefícios para Profs. de Educação Física
                  </a>
                </li>
                <li className="sectionLinkItem">
                  <a className="link" href={"/#assinaturas"}>
                    Assinaturas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerTopLeftBottom">
            <div className="paymentConditionsSection">
              <h3 className="sectionsTitle">Formas de pagamento</h3>
              <Image
                src={creditCardFlags}
                alt="Imagens das bandeiras de cartao de credito"
              />
            </div>

            <div className="securitySection">
              <h3 className="sectionsTitle">Segurança</h3>
              <div className="securitySectionCertificates">
                <Image
                  src={vtexCertificate}
                  alt="Imagem de certificado da VTEX"
                />
                <Image
                  src={ebitCertificate}
                  alt="Imagem de certificado da Ebi"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footerTopRight">
          <h2 className="footerTopRightTitle">
            Fique por {""} <span className="subTitle">dentro</span>{" "}
          </h2>

          <p className="footerTopRightContent">
            Inscreva-se e seja o primeiro a saber sobre as novidades, promoções
            e muito mais!
          </p>

          <div className="footerTopRightInputContainer">
            <input
              className="footerTopRightInput"
              placeholder="Digite seu nome"
              type="text"
            ></input>

            <input
              className="footerTopRightInput"
              placeholder="Digite seu nome"
              type="text"
            ></input>
          </div>

          <PrimaryButton>Enviar</PrimaryButton>
        </div>
      </div>

      <div className="footerContainerBottom">
        <div className="footerBottomRights">
          <p>Black Skull 2022. Todos os direitos reservados.</p>
        </div>

        <div className="footerBottomLogos">
          <Image src={logoWicomm} alt="Logo da Wicomm" />
          <Image src={logoVtex} alt="Logo da VTEX" />
        </div>
      </div>
    </FooterContainer>
  );
}
