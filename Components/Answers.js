import style from "../styles/Answers.module.scss";

import Link from "next/link";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2 style={{ margin: "0 0 10px 0", paddingTop: "80px" }}>
          Interested in working together?
        </h2>
        <p style={{ textAlign: "center", paddingBottom: "50px" }}>
          Learn more about our process and reach out <br /> if you think we’d be
          a good fit.
        </p>
        <div className={style.horizontalclick}>
          <input type="radio" name="vkl" id="vkl1" />
          <label htmlFor="vkl1">How do we get started?</label>
          <div style={{ maxWidth: "85%" }}>
            Let’s start off by{" "}
            <Link href="/contact">
              <a style={{ textDecoration: "underline" }}>scheduling a call</a>
            </Link>{" "}
            to talk about your needs and see if we are a good fit.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label htmlFor="vkl2">How much do projects usually cost?</label>
          <div style={{ maxWidth: "85%" }}>
            Our minimum engagement fee is $5000. To give you an accurate
            estimate, please{" "}
            <Link href="/about">
              <a style={{ textDecoration: "underline" }}> reach out to us</a>
            </Link>
            .
          </div>

          <input
            className={style.shortLabel}
            type="radio"
            name="vkl"
            id="vkl3"
          />
          <label className={style.shortLabel} htmlFor="vkl3">
            What information do you need
            <br /> to prepare an estimate?
          </label>
          <div style={{ maxWidth: "85%" }}>
            Our work and processes are dependent on the unique needs of each
            company, so we’d always suggest getting in touch first, and we can
            talk you through what we need in more detail.
            <br />
            During our first call, we’ll talk about your company, needs, and
            goals. After which we would provide you with a proposal and a cost
            estimate.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label htmlFor="vkl4">What is your approach?</label>
          <div style={{ maxWidth: "85%" }}>
            We approach every website project with the same four phase
            process—research, strategy, design and development. These phases
            help us keep each project on track, on time and on budget. To learn
            more about our approach and process, read {"  "}
            <Link href="/work">
              <a style={{ textDecoration: "underline" }}>
                Our approach to website projects
              </a>
            </Link>
            .
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label htmlFor="vkl5">How long do projects take?</label>
          <div style={{ maxWidth: "85%" }}>
            Each project is different and the timeline depends on the complexity
            of each given website. Most of our projects take 6 to 10 weeks,
            though there are cases when it takes less or more time.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label htmlFor="vkl6">Who is Artelle Creative?</label>
          <div style={{ maxWidth: "85%" }}>
            We are a group of creatives working remotely from different corners
            of the world, with our main base in Port St. Lucie, Florida. We have
            extensive experience in design, development, user experience,
            content creation, copywriting and virtually anything needed to craft
            websites that work for the companies we work with.
          </div>
        </div>
      </div>
    </>
  );
}
