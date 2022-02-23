import style from "../styles/Home.module.scss";
import Link from "next/link";

export default function Action() {
  return (
    <>
      <h2 className={style.haction}>
        Let’s build things <br /> together.
      </h2>
      <div style={{ padding: "0", textAlign: "center" }}>
        <button className={style.dark}>Get Started</button>
      </div>
    </>
  );
}
