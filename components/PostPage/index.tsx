import Image from "next/image";
import styles from "./index.module.css";
import awards from "../../public/images/aman-logo.png";
import { blogType } from "@/Helpers/types";

const PostPage = ({ post }: any) => {
  return (
    <div className={styles.posts}>
      <div className={styles.blog}>
        <div className={styles.profile}>
          <div>
            <Image
              src={awards}
              alt="logo"
              style={{ objectFit: "cover" }}
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <b>AMAN Executives</b> <br />
            <span>1st September, 2023</span>
          </div>
        </div>
        <h1>{(post as blogType).blog_title}</h1>
        <div className={styles.blogImage}>
          <Image
            style={{ objectFit: "contain" }}
            src={`/images/${(post as blogType).blog_image}`}
            alt="mavinG"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 395px) 50vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          {(post as blogType).paragraphs.map((x, i) => (
            <p key={i}>{x}</p>
          ))}

          {(post as blogType).headings !== undefined &&
            (post as blogType).headings?.map((x, i) => (
              <div key={i}>
                <h2>{x.title}</h2>
                <p>{x.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
