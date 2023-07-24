import { StaticImageData } from "next/image";

export type nominees = {
  title: string;
  isActive: boolean;
  id: number;
};
export type noms = {
  title: string;
  image: StaticImageData;
  artist: string;
  id: number;
};
export const titles: nominees[] = [
  {
    title: "ALL",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "ARTIST MANAGER OF THE YEAR",
    isActive: true,
    id: Math.random() * 10000,
  },
  {
    title: "PROMOTER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "PHOTOGRAPHER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "VIDEOGRAPHER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
];
