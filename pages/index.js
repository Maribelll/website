import Head from "next/head";
import { Mainscreen } from "../Components/Mainscreen";
import { Navbar } from "../Components/navbar";
import style from "../styles/Home.module.scss";
import Image from "next/Image";
import Icon1 from "../public/icons/icons-home1.svg";
import Icon2 from "../public/icons/icons-home2.svg";
import Icon3 from "../public/icons/icons-home3.svg";
import { Answers } from "../Components/Answers";
import Action from "../Components/Action";
import { Footer } from "../Components/Footer";
import { Blog } from "../Components/Blog";
import Slider from "../Components/Slider";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout
      title="Artelle Creative - Web design and development in Florida"
      keywords="web development, web design, web development in florida, 
    web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites that look and work great.We design and develop websites, create unique logos, 
      brand identities and marketing materials."
    >
      <Head>
        <title>Artellecreative</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Mainscreen></Mainscreen>
      <section className={style.sectionService}>
        <h2 style={{ paddingTop: "80px" }}>A full service web design studio</h2>
        <div className={style.allservices}>
          <div className={style.service}>
            <Image src={Icon1} alt="design" />
            <h3>
              Website Design <br />+ Development
            </h3>
            <p className={style.small}>
              Custom built websites, start to finish.
            </p>
          </div>
          <div className={style.service}>
            <Image src={Icon2} alt="design" />
            <h3 className={style.header3}>
              Content
              <br /> Creation
            </h3>
            <p className={style.small}>
              On-brand visuals and copy for your website.
            </p>
          </div>
          <div className={style.service}>
            <Image src={Icon3} alt="design" />
            <h3>
              Brand <br />
              Identity
            </h3>
            <p className={style.small}>
              Crafted visual identity for your brand.
            </p>
          </div>
        </div>
        <div className={style.btnServices}>
          <button className={style.dark}>Get Started</button>
        </div>
      </section>
      <section>
        <Slider />
      </section>

      <section>
        <Blog></Blog>
      </section>
      <section>
        <Answers></Answers>
      </section>
      <section>
        <Action></Action>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </Layout>
  );
}
