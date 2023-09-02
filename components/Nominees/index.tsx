"use client";
import { noms4, noms5, titles, titles2 } from "@/Helpers";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import moe from "../../public/images/asika.jpeg";
import bose from "../../public/images/bose.webp";
import sare from "../../public/images/sare.jpeg";
import concert from "../../public/images/aman-logo.png";
import taylor from "../../public/images/taylor.webp";
import coming from "../../public/images/coming2.jpeg";
import land from "../../public/images/land.png";
import { noms3 } from "@/Helpers";
import { nominees, noms } from "@/Helpers/types";

const Timer = dynamic(() => import("./Timer"));
const noms2: noms[] = [
  {
    title: "Moses Nwigberi",
    image: concert,
    artist: "Record Label 1 (Wizkid)",
    id: Math.random() * 10000,
  },
  {
    title: "Asa Asika",
    id: Math.random() * 10000,
    image: land,
    artist: "Record Label 2 (Wizkid)",
  },
  {
    title: "Bose Ogulu",
    id: Math.random() * 10000,
    image: taylor,
    artist: "Record Label 3 (Wizkid)",
  },
];
const noms1: noms[] = [
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
  const [cards, setCards] = useState<noms[]>(noms1);
  const [first, setFirst] = useState<boolean>(true);
  const [btnTitle, setBtnTitle] = useState<string>("More Categories");
  useEffect(() => {
    setAssets(first === true ? titles : titles2);
    setBtnTitle(first !== true ? "Previous Categories" : "More Categories");
  }, [first]);
  const titleAction = (id: number, name: string) => {
    setAssets((x) => {
      const newAssets = x.map((x) =>
        x.id == id
          ? {
              ...x,
              isActive: true,
            }
          : {
              ...x,
              isActive: false,
            }
      );
      return newAssets;
    });
  };
  return (
    <div className={styles.nominees}>
      {/* <div className={styles.timer}>
        <Timer />
      </div> */}

      <h2>Award Categories</h2>
      <div className={styles.bar}>
        {assets.map((x) => (
          <div
            onClick={() => titleAction(x.id, x.title)}
            style={{ background: x.isActive ? "var(--brown)" : "initial" }}
            key={x.id}
          >
            {x.title}
          </div>
        ))}
      </div>
      <div className={styles.loadMore}>
        <button onClick={() => setFirst(!first)}>
          <b>{btnTitle}</b>
        </button>
      </div>
      <div className={styles.nomCards}>
        {cards.map((x) => (
          <div key={x.id}>
            <div className={styles.img}>
              <Image
                style={{ objectFit: "cover" }}
                src={coming}
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
              <b>Full name</b>
              <div>nomination</div>
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
              Nigeria (AMAN) is an annual event that recognizes and celebrates
              exceptional talents within the creative industries. The award
              honors not only the artistes, but also the creative individuals
              who play a pivotal role in shaping the careers and success stories
              of these extraordinary talents.
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
              {/* <div className={styles.getTicks}>GET TICKET</div> */}
            </div>
            <div className={styles.events}>
              <div>
                <h3>EVENT DATE:</h3>
                <span>26th November, 2023</span>
              </div>
              <div>
                <h3>TIME:</h3>
                <span>6pm (Red Carpet)</span>
              </div>
              <div>
                <h3>VENUE:</h3>
                <span>
                  Eko Hotels & Suites, Victoria Island, Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Nominees };
