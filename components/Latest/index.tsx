"use client";
import styles from "../../app/page.module.css";
import Image from "next/image";
import { amanExecs, amanGroup } from "@/Helpers";
import { useRouter } from "next/navigation";
import { blogType } from "@/Helpers/types";

const Latest = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className={styles.latest}>
      <h2>LATEST NEWS</h2>
      <div className={styles.grid}>
        {(data as blogType[]).map((x, i) => (
          <div onClick={() => router.push("/posts/" + x.slug)} key={i}>
            <div className={styles.video}>
              <Image
                style={{ objectFit: "cover" }}
                src={`/images/${x.blog_image}`}
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
            <div className={styles.title}>{x.blog_title}</div>
          </div>
        ))}
      </div>
      <div className={styles.aman}>
        <div className={styles.right}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <h2>
          MEET <span>AMAN B.O.T</span>
        </h2>
        <div className={styles.meet}>
          {amanExecs.map((x, i) => (
            <div className={styles.amangrid} key={i}>
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
                <b>{x.name}</b>
                <span style={{ fontSize: "15px" }}>{x.position}</span>
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
                <b>{x.name}</b>
                <span style={{ fontSize: "15px" }}>{x.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
