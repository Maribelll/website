import styles from "../styles/Animation.module.scss";

export function Animation() {
  return (
    <>
      <section className={styles.rwWrapper}>
        <h1 className={styles.rwSentence}>
          <span className={styles.span}>
            Crafting websites
            <br /> that
          </span>
          <div className={styles.rwWords}>
            <span className={styles.spanWord1}>sell.</span>
            <span className={styles.spanWord2}>showcase.</span>
            <span className={styles.spanWord3}>convert.</span>
          </div>
          <br />
        </h1>
      </section>
    </>
  );
}
