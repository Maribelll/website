import Head from "next/head";
import Image from "next/Image";
import Image1 from "../public/hand-Image.jpg";
import Image2 from "../public/about.svg";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/navbar";
import style from "../styles/About.module.scss";
import Layout from "../Components/Layout";

export default function About() {
  return (
    <Layout
      title="about"
      keywords="web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Artelle Creative is a creative studio focused on design and development, 
      dedicated to creating websites that drive results and look the part."
    >
      <Head></Head>

      <div style={{ backgroundColor: "rgba(247, 247, 250, 1)" }}>
        <Navbar />
      </div>
      <div className={style.aboutmain}>
        <div className={style.container1}>
          <div className={style.who}>
            <h2>
              We are a studio of creatives, working hard, growing and evolving
              right alongside the companies we work with.
            </h2>
          </div>
          <div className={style.aboutImage}>
            <Image src={Image1} alt="about us" />
          </div>
        </div>
      </div>
      <div className={style.nameabout}>
        <h2>It’s simple.</h2>
      </div>
      <div className={style.principles}>
        <div className={style.principImage}>
          <Image src={Image2} alt="about us" />
        </div>
        <div className={style.principtext}>
          <div className={style.blocktext}>
            <h3>1 &mdash;Problem solvers</h3>
            <p className="small">
              We approach every project as a unique set of problems to be
              solved. That’s why every website we craft is unique and fits the
              specific vision and plan of each brand.
            </p>
          </div>
          <div className={style.blocktext}>
            <h3>2 &mdash;Practicing good</h3>
            <p>
              Call it our golden rule. We do good work that helps others. Then
              our clients get out there and make the world better for all of us.
            </p>
          </div>
          <div className={style.blocktext}>
            <h3>3 &mdash;Proud, in a good way</h3>
            <p>
              We love what we do, and we cherish the journey that got us to
              where we are today. We are proud of our work and and want to do
              work that will continue making our clients and us - happy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
