import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nominees } from "@/components/Nominees";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.css";
const Latest = dynamic(() => import("@/components/Latest"), { suspense: true });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Nominees />
      <Latest />
    </main>
  );
}
