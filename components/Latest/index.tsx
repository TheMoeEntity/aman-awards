"use client";
import styles from "../../app/page.module.css";
import Image from "next/image";
import mavinG from "../../public/images/1.png";
import { amanExecs, amanGroup, blogPosts } from "@/Helpers";
import { useRouter } from "next/navigation";

const Latest = () => {
  const router = useRouter();
  return (
    <div className={styles.latest}>
      <h2>LATEST NEWS</h2>
      <div className={styles.grid}>
        {blogPosts.map((x, i) => (
          <div onClick={() => router.push("/posts/3")} key={i}>
            <div className={styles.video}>
              <Image
                style={{ objectFit: "cover" }}
                src={x.image}
                alt="Blog thumbnail"
                fill={true}
                blurDataURL={
                  "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
                }
                quality={100}
                priority={true}
                sizes="(max-width: 800px) 100vw, (max-width: 100%) 50vw, 33vw"
              />
            </div>
            <div className={styles.title}>{x.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.aman}>
        <h2>
          MEET <span>AMAN</span>
        </h2>
        <div className={styles.meet}>
          {amanExecs.map((x, i) => (
            <div
              onClick={() => router.push("/posts/3")}
              className={styles.amangrid}
              key={i}
            >
              <div className={styles.profile}>
                <Image
                  style={{ objectFit: "cover" }}
                  src={x.img}
                  alt="AMAN Executive"
                  fill={true}
                  blurDataURL={
                    "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
                  }
                  quality={100}
                  priority={true}
                  sizes={`(max-width: ${
                    `${x.maxWidth}px` ?? "800px"
                  }px) 100vw, (max-width: ${
                    `${x.maxWidth}px` ?? "800px"
                  }) 50vw, 33vw`}
                />
              </div>
              <div className={styles.title}>
                {x.name}
                <span>{x.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.aman}>
        <h2>
          AMAN AWARDS <span>EXECUTIVES</span>
        </h2>
        <div className={styles.meet}>
          {amanGroup.map((x, i) => (
            <div className={styles.amangrid} key={i}>
              <div className={styles.profile}>
                <Image
                  style={{ objectFit: "cover" }}
                  src={x.img}
                  alt="Nominee Image"
                  fill={true}
                  blurDataURL={
                    "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
                  }
                  quality={100}
                  priority={true}
                  sizes={`(max-width: ${
                    `${x.maxWidth}px` ?? "800px"
                  }px) 100vw, (max-width: ${
                    `${x.maxWidth}px` ?? "800px"
                  }) 50vw, 33vw`}
                />
              </div>
              <div className={styles.title}>
                {x.name}
                <span>{x.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
