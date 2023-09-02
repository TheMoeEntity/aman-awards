import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.grid}>
          <div>
            <a
              target={`_blank`}
              rel="noopener noreferrer"
              href="https://amanofficial.com/"
            >
              <h1 style={{ fontSize: "40px" }}>
                AMAN <br />
                Awards
              </h1>
            </a>
          </div>
          <div>
            <h2 style={{ color: "var(--brown)" }}>CONTACT</h2>
            <div>
              <div style={{ width: "22px", height: "22px" }}>
                <i
                  style={{ fontSize: "19px" }}
                  className="fa fa-map-marker"
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                2B Owolewa Street, Off Randle <br /> Avenue, Surulere, Lagos.
              </div>
            </div>

            <div>
              <div style={{ width: "22px", height: "22px" }}>
                <i
                  style={{ fontSize: "19px" }}
                  className="fa fa-mobile"
                  aria-hidden="true"
                ></i>
              </div>
              <div>+234 809 317 8359</div>
            </div>

            <div>
              <div style={{ width: "22px", height: "22px" }}>
                <i
                  style={{ fontSize: "19px" }}
                  className="fa fa-envelope"
                  aria-hidden="true"
                ></i>
              </div>
              <div>info@Amanawards.com</div>
            </div>
          </div>
          <div>
            <h2 style={{ color: "var(--brown)" }}>AMAN</h2>
            <div>
              <i className="fa fa-angle-right"></i>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://amanofficial.com/"
              >
                Official Website
              </a>
            </div>
            <div>
              <i className="fa fa-angle-right"></i>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://www.amanofficial.com/about-us/"
              >
                About AMAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
