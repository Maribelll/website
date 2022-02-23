import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/Image";
import Logo from "../public/Logo-up.svg";
import Logo2 from "../public/logo-dark.svg";
import styles from "../styles/Navigation.module.scss";
import style from "../styles/Home.module.scss";
import { Navadapt } from "./Navadapt";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Navadapt />
      <div>
        <Link href={"/"}>
          <a>
            <span className={styles.logo1}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>

        <Link href={"/"}>
          <a>
            <span className={styles.logo2}>
              <Image src={Logo2} alt="Logo" />
            </span>
          </a>
        </Link>
      </div>
      <Navadapt />
      <div></div>
      <div className={styles.btnMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>

      <div className={styles.menu}>
        <Link href={"/work"}>
          <a>Work</a>
        </Link>

        <Link href={"/about"}>
          <a>About</a>
        </Link>

        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>

        <button className={style.dark}>
          <Link href={"/contact"}>
            <a style={{ paddingRight: "0px" }}>Get Started </a>
          </Link>
        </button>
      </div>
    </nav>
  );
}
