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
            <h2>CONTACT</h2>
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
            <h2>AMAN</h2>
            <div>
              <Link href={"/about"}>
                <i className="fa fa-angle-right"></i>
                Official Website
              </Link>
            </div>
            <div>
              <Link href={"/contact"}>
                <i className="fa fa-angle-right"></i>
                Contact Us
              </Link>
            </div>
            <div>
              {/* <div className={styles.icons}>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://web.facebook.com/Moses.Nwigberi/"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://twitter.com/pepnops"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/pepnops/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="https://instagram.com/pepnops"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
