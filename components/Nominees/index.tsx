"use client";
import { nominees, noms, titles } from "@/Helpers";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import styles from "../../app/page.module.css";
import moe from "../../public/images/asika.jpeg";
import bose from "../../public/images/bose.webp";
import sare from "../../public/images/sare.jpeg";
import concert from "../../public/images/concert.jpeg";
const Timer = dynamic(() => import("./Timer"));

const noms: noms[] = [
  {
    title: "Sunday Are",
    image: sare,
    artist: "List Entertainment (Wizkid)",
    id: Math.random() * 10000,
  },
  {
    title: "Asa Asika",
    id: Math.random() * 10000,
    image: moe,
    artist: "Plug Entertainment (Davido)",
  },
  {
    title: "Bose Ogulu",
    id: Math.random() * 10000,
    image: bose,
    artist: "Spaceship Collective (Burna)",
  },
];
const Nominees = () => {
  const [assets, setAssets] = useState<nominees[]>(titles);
  return (
    <div className={styles.nominees}>
      {/* <div className={styles.timer}>
        <Timer />
      </div> */}

      <h2>NOMINEES</h2>
      <div className={styles.bar}>
        {assets.map((x) => (
          <div
            style={{ background: x.isActive ? "var(--brown)" : "initial" }}
            key={x.id}
          >
            {x.title}
          </div>
        ))}
      </div>
      <div className={styles.nomCards}>
        {noms.map((x) => (
          <div key={x.id}>
            <div className={styles.img}>
              <Image
                style={{ objectFit: "cover" }}
                src={x.image}
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
            <div className={styles.details}>
              <b>{x.title}</b>
              <div>{x.artist}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.aboutaman}>
        <div className={styles.grids}>
          <div>
            <h2>
              ABOUT <br />
              AMAN <br />
              AWARDS
            </h2>
            <p>
              The AMAN Awards, presented by the Artiste Managers Association in
              Nigeria (AMAN), is an annual event that celebrates and recognizes
              exceptional talents and achievements within the Nigerian music
              industry. The Awards is dedicated to honoring not only the artists
              but also the creatives who play a pivotal role in shaping the
              careers and success stories of these extraordinary musicians.
            </p>
          </div>
          <div>
            <div className={styles.concerts}>
              <div className={styles.conc}>
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
              <div className={styles.getTicks}>GET TICKET</div>
            </div>
            <div className={styles.events}>
              <div>
                <h3>EVENT DATE:</h3>
                <span>27th August, 2023</span>
              </div>
              <div>
                <h3>TIME:</h3>
                <span>9:30 pm</span>
              </div>
              <div>
                <h3>VENUE:</h3>
                <span>Eko Convention center, Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Nominees };
