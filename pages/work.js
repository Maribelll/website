import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/navbar";
import { Maximus } from "../Components/Maximus";
import style from "/styles/Work.module.scss";
import { Shudaproperties } from "../Components/Shudaproperties";
import { Nomad } from "../Components/Nomad";
import { Blog } from "../Components/Blog";
import Layout from "../Components/Layout";

export default function Work() {
  return (
    <Layout
      title="Work - Artelle Creative Web design and development."
      keywords="web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Our Work. Your Success. We tackle each project with passion and determination.
      We work hard for our clients to stand out. See our work here."
    >
      <Head></Head>
      <Navbar />

      <div className={style.mainname}>
        <h2>Everything to put your business online</h2>
        <p style={{ fontSize: "16px" }}>Featured case studies.</p>
      </div>
      <Maximus></Maximus>
      <Shudaproperties></Shudaproperties>
      <Nomad></Nomad>
      <Blog></Blog>
      <Footer />
    </Layout>
  );
}
