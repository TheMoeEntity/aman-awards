import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nominees } from "@/components/Nominees";
import { Helpers } from "@/Helpers";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
const Latest = dynamic(() => import("@/components/Latest"), { suspense: true });

export default async function Home() {
  const data = await Helpers.getData();
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Nominees />
      <Latest data={data} />
      <Footer />
    </main>
  );
}
