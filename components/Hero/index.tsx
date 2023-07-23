"use client";
import styles from "../../app/page.module.css";
import icon2 from "../../public/images/law.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={icon2}
        alt="card-image"
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 800px) 100vw, (max-width: 100%) 50vw, 33vw"
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
