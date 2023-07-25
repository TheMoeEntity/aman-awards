"use client";
import styles from "../../app/page.module.css";
import Image from "next/image";
import concert from "../../public/images/taylor.webp";
import nigga from "../../public/images/nigga.jpeg";

const Latest = () => {
  return (
    <div className={styles.latest}>
      <div className={styles.grid}>
        {[...Array(6)].map((_x, i) => (
          <div key={i}>
            <div className={styles.video}>
              <Image
                style={{ objectFit: "cover" }}
                src={concert}
                alt="Nominee Image"
                fill={true}
                blurDataURL={
                  "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
                }
                quality={100}
                priority={true}
                sizes="(max-width: 800px) 100vw, (max-width: 100%) 50vw, 33vw"
              />
            </div>
            <div className={styles.title}>
              Taylor {`Swift's`} Short Film {`"All too well"`} Wins Best Video
              <span>11/13/2022</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.aman}>
        <h2>
          MEET <span>AMAN</span>
        </h2>
        <div className={styles.meet}>
          {[...Array(3)].map((_x, i) => (
            <div key={i}>
              <div className={styles.profile}>
                <Image
                  style={{ objectFit: "cover" }}
                  src={nigga}
                  alt="Nominee Image"
                  fill={true}
                  blurDataURL={
                    "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
                  }
                  quality={100}
                  priority={true}
                  sizes="(max-width: 800px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div className={styles.title}>
                John Olubode
                <span>Chairman, AMAN</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
