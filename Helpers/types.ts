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
