import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Workexample.module.scss";
import Image from "next/Image";
import Action from "../../Components/Action";
import Image1 from "../../public/portfolio/MG-1.jpg";
import Image2 from "../../public/portfolio/MG-2.jpg";
import Image3 from "../../public/portfolio/MG-3.jpg";
import Image4 from "../../public/portfolio/MG-4.jpg";
import Image5 from "../../public/portfolio/MG-5.jpg";
import Image6 from "../../public/portfolio/MG-6.jpg";
import Layout from "../../Components/Layout";

export default function Post1() {
  return (
    <Layout
      title="Artelle Creative - Our work Case Maximus Microgreens"
      keywords="Web development, web design, web development in florida, 
       websites for small business, professional websitesfolio Artellecreative website"
      description="Helping a brand promote healthy living with a website and a modern identity."
    >
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.blog}>
            <p className={style.textblue}>MAXIMUS MICROGREENS</p>
            <h1>Helping a brand promote healthy living</h1>
          </div>
          <Image src={Image1} alt="" />

          <div className={style.blog}>
            <h2>The client</h2>
            <p>
              Maximus Microgreens is a microgreens grower and subscription based
              delivery service.
            </p>
            <h2>The challenge</h2>
            <p>
              Maximus Microgreens needed a new visual identity and a new
              website. Our unique challenge was educating the local audience
              about microgreens as well as helping the business grow the number
              of weekly delivery subscribers.
            </p>
            <h2>The solution</h2>
            <p>
              We started with a fresh new logo and a visual identity that
              communicated health, strength and excitement about the brand and
              the product offering. The website
            </p>
          </div>
          <Image className={style.photo} src={Image2} alt="" />
          <Image src={Image3} alt="" />
          <div className={style.blog}>
            <h2>New website</h2>
            <p>
              Because of the nature of Maximus Microgreens’ product offering, we
              needed additional research into what the local public knew about
              microgreens and the overall level of health-conciousness. We set
              up a simple Facebook page and designed postcards for local
              distribution to test the market. The project is still ongoing and
              insights are being collected through the Facebook page and the
              performance of the postcards.
            </p>
          </div>
          <div className={style.photo}>
            <Image src={Image4} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Image5} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Image6} alt="" />
          </div>
          <Action />
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
