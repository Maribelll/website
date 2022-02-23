import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";

import style from "../../styles/Post.module.scss";
import { Blog } from "../../Components/Blog";
import Image from "next/image";
import ImageAuthor from "../../public/post/photo.png";
import ImageArticle from "../../public/post/Postimg.png";
import Layout from "../../Components/Layout";

export default function Article1() {
  return (
    <Layout
      title="Blog - Artelle Creative Web design and development."
      keywords="posts blog Artelle creative web development"
      description="Our blog"
    >
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1 style={{ textAlign: "left" }}>
              Oluptate in enim adipisicing qui nostrud ex exercitation mollit id
              officia
            </h1>
            <div className={style.photo}>
              <div className={style.photoImage}>
                <Image
                  src={ImageAuthor}
                  alt="Author"
                  role="presentation"
                ></Image>
              </div>
              <div className={style.photoname}>
                <p>
                  Ana Shuda
                  <span style={{ fontWeight: "600" }}>
                    <br />
                  </span>
                  21 January, 2022
                </p>
              </div>
            </div>
          </div>
          <Image src={ImageArticle} alt="Article1" role="presentation" />
          <p className={style.text}>
            Voluptate in enim adipisicing qui nostrud ex exercitation mollit id
            officia. Eiusmod culpa in culpa commodo quis non eu pariatur Lorem
            anim tempor minim. Ullamco do in duis.
          </p>
          <h2>Phase 1 - Discovery</h2>
          <p className={style.text}>
            Voluptate in enim adipisicing qui nostrud ex exercitation mollit id
            officia. Eiusmod culpa in culpa commodo quis non eu pariatur Lorem
            anim tempor minim. Ullamco do in duis.Voluptate in enim adipisicing
            qui nostrud ex exercitation mollit id officia. Eiusmod culpa in
            culpa commodo quis non eu pariatur Lorem anim tempor minim. Ullamco
            do in duis. Voluptate in enim adipisicing qui nostrud ex
            exercitation mollit id officia.Voluptate in enim adipisicing qui
            nostrud ex exercitation mollit id officia.{" "}
          </p>
          <h2>Phase 1 - Discovery</h2>
          <p className={style.text}>
            Voluptate in enim adipisicing qui nostrud ex exercitation mollit id
            officia. Eiusmod culpa in culpa commodo quis non eu pariatur Lorem
            anim tempor minim. Ullamco do in duis.Voluptate in enim adipisicing
            qui nostrud ex exercitation mollit id officia. Eiusmod culpa in
            culpa commodo quis non eu pariatur Lorem anim tempor minim. Ullamco
            do in duis. Voluptate in enim adipisicing qui nostrud ex
            exercitation mollit id officia.Voluptate in enim adipisicing qui
            nostrud ex exercitation mollit id officia.{" "}
          </p>
          <h2>Phase 1 - Discovery</h2>
          <p className={style.text}>
            Voluptate in enim adipisicing qui nostrud ex exercitation mollit id
            officia. Eiusmod culpa in culpa commodo quis non eu pariatur Lorem
            anim tempor minim. Ullamco do in duis.Voluptate in enim adipisicing
            qui nostrud ex exercitation mollit id officia. Eiusmod culpa in
            culpa commodo quis non eu pariatur Lorem anim tempor minim. Ullamco
            do in duis. Voluptate in enim adipisicing qui nostrud ex
            exercitation mollit id officia.Voluptate in enim adipisicing qui
            nostrud ex exercitation mollit id officia.{" "}
          </p>
        </div>
        <div className={style.blog}>
          <Blog />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
