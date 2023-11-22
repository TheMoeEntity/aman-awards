"use client";
import styles from "../../app/page.module.css";
import icon2 from "../../public/images/land_11zon.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      {/* <video autoPlay loop muted playsInline className={styles.backVideo}>
        <source src="/videos/aman.mp4" type="video/mp4" />
      </video> */}
      <Image
        src={icon2}
        alt="card-image"
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 1920px) 100vw, (max-width: 100%) 50vw, 33vw"
      />
      <div className={styles.captions}>
        <p>WELCOME TO</p>
        <h1>
          AMAN <br />
          AWARDS
        </h1>
      </div>
    </div>
  );
};

export { Hero };
