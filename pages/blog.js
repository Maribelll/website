import Head from "next/head";
import { Navbar } from "../Components/navbar";
import { Footer } from "../Components/Footer";
import style from "/styles/Blogpage.module.scss";
import Link from "next/link";
import Image from "next/Image";
import Post1 from "../public/post.png";
import ImagePost from "../public/post/Postimg.png";
import Layout from "../Components/Layout";

export default function Blog() {
  return (
    <Layout
      title="Blog - Artelle Creative Web design and development."
      keywords="posts blog Artelle creative web development"
      description="Our blog"
    >
      <div>
        <Head />
        <Navbar />
        <div className={style.sectionblog}>
          <div className={style.containerblog}>
            <h2>Latest stories, insights and ideas</h2>

            <div className={style.posts}>
              <div className={style.post}>
                <div className={style.blogImage}>
                  <Link href={"../posts/article1"}>
                    <a>
                      <Image src={ImagePost} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <Link href={"../posts/article1"}>
                  <a>
                    <span className={style.more}>Read more</span>
                  </a>
                </Link>
              </div>
              <div className={style.post}>
                <div className={style.blogImage}>
                  <Link href={"../posts/article1"}>
                    <a>
                      <Image src={Post1} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <Link href={"../posts/article1"}>
                  <a>
                    <span className={style.more}>Read more</span>
                  </a>
                </Link>
              </div>
              <div className={style.post}>
                <div className={style.blogImage}>
                  <Link href={"../posts/article1"}>
                    <a>
                      <Image src={Post1} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <Link href={"../posts/article1"}>
                  <a>
                    <span className={style.more}>Read more</span>
                  </a>
                </Link>
              </div>
              <div className={style.post}>
                <div className={style.blogImage}>
                  <Link href={"/posts/article1"}>
                    <a>
                      <Image src={Post1} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <Link href={"../posts/article1"}>
                  <a>
                    <span className={style.more}>Read more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
