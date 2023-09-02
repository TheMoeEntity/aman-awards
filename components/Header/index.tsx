"use client";
import Image from "next/image";
import pepnops from "../../public/images/logo-main.png";
import Link from "next/link";
import { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import styles from "../../app/page.module.css";

const Header = () => {
  const pathname = usePathname();

  const showStyle = (): CSSProperties => {
    const homeStyle: CSSProperties = {
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.45)",
    };

    const blogStyle: CSSProperties = {
      position: "relative",
      backgroundColor: "rgba(0, 0, 0, 0.050)",
      borderBottom: "1px solid rgba(0,0,0,0.01)",
    };
    return pathname === "/" ? homeStyle : blogStyle;
  };
  return (
    <div style={showStyle()} className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src={pepnops}
            alt="logo"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      {/* <div>
        <ul>
          <li onClick={() => router.push("/")}>Home</li>
          <li onClick={() => router.push("#solutions")}>Solutions</li>
          <li onClick={() => router.push("/about")}>Who we are</li>
          <li onClick={() => router.push("/contact")}>{`Let's Talk`}</li>
        </ul>
      </div> */}
    </div>
  );
};

export { Header };
