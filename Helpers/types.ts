import { StaticImageData } from "next/image";
export type nomSingle = {
  name: string;
  image: StaticImageData | null;
  nomination: string;
};
export type nominees = {
  title: string;
  isActive: boolean;
  id: number;
  nominees: nomSingle[];
};
export type execType = {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
};
export interface amanGroupType {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}
export type blogPostsType = {
  title: string;
  image: StaticImageData;
};
export type noms = {
  title: string;
  image: StaticImageData;
  artist: string;
  id: number;
};
export type blogType = {
  blog_image: string;
  blog_title: string;
  slug: string;
  paragraphs: string[];
  headings?: {
    title: string;
    content: string[];
  }[];
};
