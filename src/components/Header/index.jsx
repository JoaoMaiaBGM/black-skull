import Link from "next/link";
import Image from "next/image";
import { HeaderContainer } from "./style";
import logo from "../../assets/Logo.svg";
import { RxAvatar, RxStar } from "react-icons/rx";
import { TbShoppingCart, TbTruck } from "react-icons/tb";

export function Header() {
  return (
    <HeaderContainer>
      <div className="headerTop">
        <h3>fale conosco</h3>

        <div className="deliveryPrice">
          <TbTruck className="truckIcon" />
          <p>frete grátis a partir de R$199,90 para todo o Brasil</p>
        </div>

        <h3>blog.blackskull</h3>
      </div>

      <div className="navbarContainer">
        <h1>
          <Link href={"/"}>
            <Image
              className="navbarBrand"
              alt="Logo marca da Black Skull"
              src={logo}
            />
          </Link>
        </h1>

        <nav className="nav">
          <ul className="navbar">
            <li>
              <a className="navbarItem" href={"/#categorias"}>
                categorias
              </a>
            </li>

            <li>
              <a className="navbarItem" href={"/#vestuário"}>
                vestuário
              </a>
            </li>

            <li>
              <Link className="navbarItem" href={"/#objetivos"}>
                objetivos
              </Link>
            </li>

            <li>
              <a className="navbarItem" href={"/#promoções"}>
                promoções
              </a>
            </li>

            <li>
              <a className="navbarItem" href={"/#atletas"}>
                atletas
              </a>
            </li>

            <li>
              <a className="navbarItem" href={"/#assinatura"}>
                assinatura
              </a>
            </li>
          </ul>
        </nav>
        <input className="input" type="text" placeholder="Buscar" />

        <div className="iconContainer">
          <RxAvatar />
          <RxStar />
          <TbShoppingCart />
        </div>
      </div>
    </HeaderContainer>
  );
}
