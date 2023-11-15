"use client";
import { titles, titles2 } from "@/Helpers";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import concert from "../../public/images/aman-logo.png";
import coming from "../../public/images/coming2.jpeg";

import { nominees, nomSingle } from "@/Helpers/types";

const Nominees = () => {
  const [assets, setAssets] = useState<nominees[]>(titles);
  const [first, setFirst] = useState<boolean>(true);
  const [noms, setNoms] = useState<nomSingle[]>(assets[0].nominees);
  const [btnTitle, setBtnTitle] = useState<string>("More Categories");
  useEffect(() => {
    setAssets(first === true ? titles : titles2);
    setBtnTitle(first !== true ? "Previous Categories" : "More Categories");
  }, [first]);
  const titleAction = (id: number, name: string) => {
    const currNoms: nomSingle[] | undefined = assets.find(
      (x) => x.id === id
    )?.nominees;
    if (currNoms) {
      setNoms(currNoms);
    }
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
        {noms.map((x, i) => (
          <div key={i}>
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
              <b>{x.name}</b>
              <div>{x.nomination}</div>
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
