import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Workexample.module.scss";
import Image from "next/Image";
import Action from "../../Components/Action";
import Image1 from "../../public/portfolio/NT-1.jpg";
import Image2 from "../../public/portfolio/NT-2.jpg";
import Image3 from "../../public/portfolio/NT-3.jpg";
import Image4 from "../../public/portfolio/NT-4.jpg";
import Image5 from "../../public/portfolio/NT-5.jpg";
import Layout from "../../Components/Layout";

export default function Post3() {
  return (
    <Layout
      title="Artelle Creative - Our work Case NomadTechy"
      keywords="Web development, web design, web development in florida, 
     websites for small business, professional websitesfolio Artellecreative website"
      description="Crafting an online presence for a small town rental venture."
    >
      <Head></Head>
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.blog}>
            <p className={style.textblue}> NOMAD TECHY</p>
            <h1>Building a website that attracts IT clients.</h1>
          </div>
          <Image src={Image1} alt="" />

          <div className={style.blog}>
            <h2>The client</h2>
            <p>
              NomadTechy is an IT managed service provider and provides computer
              and network support for small to medium-sized businesses.
            </p>
            <h2>The challenge</h2>
            <p>
              NomadTechy approached us at the start of the company’s journey and
              was looking for a fresh, friendly identity and a website to
              attract potential clientele. The goal was to make the company
              stand out by communicating approachability and transparency.
            </p>
            <h2>The solution</h2>
            <p>
              We designed a new logo and a visual identity. The website
              organized NomadTechy’s list of services in a simple way, making it
              easy for potential clients to compare services and choose a
              package that fits their needs.
            </p>
          </div>
          <Image className={style.photo} src={Image2} alt="" />
          <div className={style.blog}>
            <h2>New website</h2>
            <p>
              We built a responsive website that was easy to use on a phone, as
              well as on a desktop computer. The new NomadTechy website includes
              a brief introduction for potential clients, an overview of
              services, and a quick way for current clients to get support.
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
