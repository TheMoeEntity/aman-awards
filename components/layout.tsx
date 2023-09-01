"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && <Header />}
      {children}
      {pathname !== "/" && <Footer />}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Layout;
