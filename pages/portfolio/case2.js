import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Workexample.module.scss";
import Image from "next/Image";
import Action from "../../Components/Action";
import Image1 from "../../public/portfolio/SP_1.jpg";
import Image2 from "../../public/portfolio/SP_2.jpg";
import Image3 from "../../public/portfolio/SP_3.jpg";
import Image4 from "../../public/portfolio/SP_4.jpg";
import Image5 from "../../public/portfolio/SP_5.jpg";
import Layout from "../../Components/Layout";

export default function Post2() {
  return (
    <Layout
      title="Artelle Creative - Our work Case Shuda Properties"
      keywords="Web development, web design, web development in florida, 
     websites for small business, professional websitesfolio Artellecreative website"
      description="Building a website for an IT that attracts IT clients."
    >
      <Head></Head>
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.blog}>
            <p className={style.textblue}>SHUDA PROPERTIES</p>
            <h1>
              Crafting an online presence for a small town rental venture.
            </h1>
          </div>
          <Image src={Image1} alt="" />

          <div className={style.blog}>
            <h2>The client</h2>
            <p>
              Shuda Properties is a real estate company from Sedalia, MO,
              specializing in rental properties.
            </p>
            <h2>The challenge</h2>
            <p>
              Alex, the owner of the company found himself spread too thin
              between property showings, email chains and phone calls. He needed
              a simple solution that would act as a hub for current and future
              residents without requiring his 24/7 attention.
            </p>
            <h2>The solution</h2>
            <p>
              The first step in solving Alex’s problem was to design a branding
              identity that would represent the company well today and well into
              the future to sustain the company’s growth. The solution became a
              modular website that can change and evolve with the company’s
              growth.
            </p>
          </div>
          <Image className={style.photo} src={Image2} alt="" />
          <div className={style.blog}>
            <h2>New website</h2>
            <p>
              We built a responsive website that includes an overview of
              properties, a new resident hub with info on payments and easy
              access to required documents, and a contact form for easy
              apartment showings. The navigation and site structure provides an
              easy way for users to find what they’re looking for. The modular
              layout of the website, makes it easy to update and add content as
              the company grows.
            </p>
          </div>
          <div className={style.photo}>
            <Image src={Image3} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Image4} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Image5} alt="" />
          </div>
          <Action />
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
