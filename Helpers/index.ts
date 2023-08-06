import { StaticImageData } from "next/image";
import james from "../public/images/James.jpeg";
import servic from "../public/images/servic-3.jpeg";
import test1 from "../public/images/testi1.jpeg";
import test2 from "../public/images/concert.jpeg";
import three from "../public/images/three.jpeg";
import tm5 from "../public/images/tm5.jpeg";
import two from "../public/images/two.jpeg";
import nigga from "../public/images/David IfeanyiChukwu Abiodun Nwachukwu.jpg";
import white from "../public/images/Dutchess Karifest Onyekaah.jpg";
import chan from "../public/images/Collins ifeanyi Onwuneme Ajereh Enebeli (Mavin Grandpa).jpg";
import waaliyah from "../public/images/Walliyah Abiola.jpg";
import omokore from "../public/images/Omokore Oluwadamilola Ayoola.jpg";
import { nominees, noms } from "./types";

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

export const noms3: noms[] = [
  {
    title: "James Doh",
    image: james,
    artist: "Record Label 4 (Victony)",
    id: Math.random() * 10000,
  },
  {
    title: "John Doe",
    id: Math.random() * 10000,
    image: test1,
    artist: "Record Label 5 (Pere)",
  },
  {
    title: "Jack Robbinson",
    id: Math.random() * 10000,
    image: tm5,
    artist: "Record Label 3 (Wizkid)",
  },
];
export const amanGroup2: {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}[] = [
  {
    name: "David IfeanyiChukwu Abiodun Nwachukwu",
    position: "AMAN Committee Chairman",
    img: nigga,
    maxWidth: 1000,
  },
  {
    name: "Omokore Oluwadamilola Ayoola",
    position: "Aman Awards Committee Secretary",
    img: omokore,
    maxWidth: 1000,
  },
];
export const amanGroup: {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}[] = [
  {
    name: "Collins ifeanyi Onwuneme Ajereh Enebeli (Mavin Grandpa)",
    position: "AMAN President",
    img: chan,
    maxWidth: 500,
  },
  {
    name: "Walliyah Abiola",
    position: "Marketing, Fund Raising & Public Relations.",
    img: waaliyah,
    maxWidth: 1000,
  },
  {
    name: "Dutchess Karifest Onyekaah",
    position: "AMAN Committee Vice Chairperson",
    img: white,
  },
].concat(amanGroup2);
export const noms4: noms[] = [
  {
    title: "Michael Jackson",
    image: servic,
    artist: "Record Label 7 (Johnson)",
    id: Math.random() * 10000,
  },
  {
    title: "Banky W",
    id: Math.random() * 10000,
    image: two,
    artist: "Record Label 8 (Mercy)",
  },
  {
    title: "Jack Robbinson",
    id: Math.random() * 10000,
    image: three,
    artist: "We da best Music (DJ Khaleed)",
  },
];
export const noms5: noms[] = [
  {
    title: "John Doe",
    id: Math.random() * 10000,
    image: test1,
    artist: "Record Label 5 (Pere)",
  },
  {
    title: "Banky W",
    id: Math.random() * 10000,
    image: test2,
    artist: "Record Label 8 (Mercy)",
  },
  {
    title: "Jack Robbinson",
    id: Math.random() * 10000,
    image: tm5,
    artist: "Record Label 3 (Wizkid)",
  },
];
