import Link from "next/link";
import Image from "next/Image";
import Insta from "../public/icons/instagram-icon.svg";
import Facebook from "../public/icons/facebook-icon.svg";
import style from "../styles/Footer.module.scss";
import Logo from "../public/Logo-footer.svg";

export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footermain}>
          <div className={style.form}>
            {/*  <h3>Follow along</h3> */}
            <div className={style.logofooter}>
              <Link href={"/"}>
                <a>
                  <span className={style.logo1}>
                    <Image src={Logo} alt="Logo" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.contactfooter}>
            <h3>Contact us</h3>
            <p className={style.email}>hello&#64;artellecreative.com</p>
            <div className={style.follow}>
              <h3>Follow along</h3>
              <div className={style.social}>
                <a
                  href={"https://www.instagram.com/artellecreative/"}
                  target="_blanc"
                >
                  <span className={style.insta}>
                    <Image src={Insta} alt="instagram" />
                  </span>
                </a>

                <a
                  href={"https://www.facebook.com/ArtelleCreative"}
                  target="_blanc"
                >
                  <span className={style.facebook}>
                    <Image src={Facebook} alt="facebook" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <ul className={style.menufooter}>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/work"}>
                  <a>Work</a>
                </Link>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/blog"}>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.privacy}>
          <div>
            <Link href={"/"}>
              <a>Cookie Policy</a>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <a>Terms &amp; Conditions</a>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <a>&copy; Artelle Creative 2021. All rights reserved.</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
