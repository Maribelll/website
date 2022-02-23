import Link from "next/link";
import Image from "next/Image";
import Nomadtechy from "../public/nomad.png";
import style from "../styles/Work.module.scss";
import styles from "../styles/Home.module.scss";

export function Nomad() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"/portfolio/case3"}>
            <a>
              <p>NOMAD TECHY</p>
              <h3>
                Building a website that
                <br /> attracts IT clients.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.Imagework}>
          <Link href={"/portfolio/case3"}>
            <a>
              <Image src={Nomadtechy} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
