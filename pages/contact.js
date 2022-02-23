import Head from "next/head";
import Image from "next/Image";
import Insta from "../public/icons/instagram.svg";
import Facebook from "../public/icons/facebook.svg";
import Photo from "../public/post/photo.png";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/navbar";
import style from "../styles/Contact.module.scss";
import React from "react";
import { InlineWidget } from "react-calendly";
import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout
      title="Contact Us - Artelle Creative Web design and development."
      keywords="web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites for small businesses.
      Contact us today and we will create an effective tool for your business."
    >
      <Head></Head>
      <Navbar />
      <div className={style.contact}>
        <div className={style.container}>
          <div className={style.getit}>
            <h1>Get in touch</h1>
            <p>
              We’d love to chat. Let’s start by scheduling a 30-minute discovery
              call to talk about your project.
            </p>

            <p>Or if you prefer, email us at hello@artellecreative.com.</p>

            <div className={style.photo}>
              <div className={style.photoImage}>
                <Image src={Photo} alt="" />
              </div>
              <div className={style.photoname}>
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Ana Shuda <br />
                  </span>
                  New business and general inquiries.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "24px" }}>Follow along</p>
            <div className={style.social}>
              <a
                href={"https://www.instagram.com/artellecreative/"}
                target="_blanc"
              >
                <span className={style.insta}>
                  <Image src={Insta} alt="Logo" />
                </span>
              </a>
              <a
                href={"https://www.facebook.com/ArtelleCreative"}
                target="_blanc"
              >
                <span className={style.facebook}>
                  <Image src={Facebook} alt="Logo" />
                </span>
              </a>
            </div>
          </div>
          <div className={style.calendar}>
            <InlineWidget url="https://calendly.com/artellecreative?text_color=2e303d&primary_color=4e93ce" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
