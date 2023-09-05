"use client";
import { Helpers } from "@/Helpers";
import { useScrollTop } from "@/Helpers/hooks";
import Script from "next/script";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop, pathname } = useScrollTop();
  return (
    <>
      {Helpers.checkValid(pathname) && <Header />}
      {children}
      {Helpers.checkValid(pathname) && <Footer />}

      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      />
      <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
        <i className="fa-solid fa-caret-up"></i>
      </div>
    </>
  );
};

export default Layout;
