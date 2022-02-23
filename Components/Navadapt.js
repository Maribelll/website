import styles from "../styles/Navadapt.module.scss";
import Link from "next/link";
import Logo2 from "../public/logo-dark.svg";
import Image from "next/Image";

export function Navadapt() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <a>
            <span className={styles.logo2}>
              <Image src={Logo2} alt="Logo" />
            </span>
          </a>
        </Link>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} forhtml={styles.menuBtn}>
          <span className={styles.navicon}></span>
        </label>
        <ul className={styles.menu}>
          <li className={styles.navLi}>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
