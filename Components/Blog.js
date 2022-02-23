import style from "../styles/Blog.module.scss";
import Image from "next/Image";
import Link from "next/link";
import Post1 from "../public/post/Postimg.png";

export function Blog() {
  return (
    <>
      <div className={style.sectionblog} style={{ marginBottom: "50px" }}>
        <div className={style.containerblog}>
          <h2>Latest stories, insights and ideas</h2>
          <p style={{ textAlign: "center" }} className="small">
            Read our blog.
          </p>
          <div className={style.posts}>
            <div className={style.post}>
              <div className={style.blogImage}>
                <Link href={"/posts/"}>
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
                <Link href={"/posts/"}>
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
    </>
  );
}
