import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Layout from "@/components/layout";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AMAN Awards - Celebrating Nigeria's Creative Industry Talents",
  description:
    "Discover the prestigious AMAN Awards, an annual event by the Artiste Managers Association in Nigeria, honoring exceptional talents and the creative individuals who shape their success. Join us in celebrating the stars and behind-the-scenes heroes of the Nigerian creative industry.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
