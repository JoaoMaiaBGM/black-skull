import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/Logo.svg";
import { RxAvatar, RxStar } from "react-icons/rx";
import { TbShoppingCart, TbTruck } from "react-icons/tb";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h3>fale conosco</h3>

        <div className={styles.deliveryPrice}>
          <TbTruck className={styles.truckIcon} />
          <p>frete grátis a partir de R$199,90 para todo o Brasil</p>
        </div>

        <h3>blog.blackskull</h3>
      </div>

      <div className={styles.navbarContainer}>
        <h1>
          <Link href={"/"}>
            <Image
              className={styles.navbarBrand}
              alt="Logo marca da Black Skull"
              src={logo}
            />
          </Link>
        </h1>

        <nav className={styles.nav}>
          <ul className={styles.navbar}>
            <li>
              <a className={styles.navbarItem} href={"/#categorias"}>
                categorias
              </a>
            </li>

            <li>
              <a className={styles.navbarItem} href={"/#vestuário"}>
                vestuário
              </a>
            </li>

            <li>
              <Link className={styles.navbarItem} href={"/#objetivos"}>
                objetivos
              </Link>
            </li>

            <li>
              <a className={styles.navbarItem} href={"/#promoções"}>
                promoções
              </a>
            </li>

            <li>
              <a className={styles.navbarItem} href={"/#atletas"}>
                atletas
              </a>
            </li>

            <li>
              <a className={styles.navbarItem} href={"/#assinatura"}>
                assinatura
              </a>
            </li>
          </ul>
        </nav>
        <input className={styles.input} type="text" placeholder="Buscar" />

        <div className={styles.iconContainer}>
          <RxAvatar />
          <RxStar />
          <TbShoppingCart />
        </div>
      </div>
    </header>
  );
}
