import { StaticImageData } from "next/image";
import james from "../public/images/James.jpeg";
import servic from "../public/images/servic-3.jpeg";
import test1 from "../public/images/testi1.jpeg";
import test2 from "../public/images/concert.jpeg";
import three from "../public/images/three.jpeg";
import tm5 from "../public/images/tm5.jpeg";
import two from "../public/images/two.jpeg";
import nigga from "../public/images/2.png";
import white from "../public/images/Dutchess Karifest Onyekaah.jpg";
import chan from "../public/images/presi.jpg";
import waaliyah from "../public/images/Walliyah Abiola.jpg";
import omokore from "../public/images/Omokore Oluwadamilola Ayoola.jpg";
import dami from "../public/images/3.png";
import eliza from "../public/images/exec1.jpeg";
import ike from "../public/images/exec2.jpeg";
import lawal from "../public/images/lawal.jpg";
import awards from "../public/images/awards.jpg";
import exec from "../public/images/exec3.jpeg";
import plaque from "../public/images/plaque.jpg";
import { nominees, noms } from "./types";
export const blogPosts: { title: string; image: StaticImageData }[] = [
  {
    title: "AMAN set to promote creativity with awards",
    image: chan,
  },
  {
    title: "AMAN set to deliver exceptional experience at AMAN awards",
    image: awards,
  },
  {
    title: "AMAN Introduces AMAN awards",
    image: plaque,
  },
];
export const amanExecs: {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}[] = [
  {
    name: "Mavin Grandpa",
    img: chan,
    maxWidth: 1000,
    position: "President",
  },
  {
    name: "Mr Lawal Saheed Adeola",
    img: lawal,
    maxWidth: 1000,
    position: "1st Vice President",
  },
  {
    name: "Mr Ike Lawrence Onuoha",
    img: ike,
    maxWidth: 1000,
    position: "2nd Vice President",
  },
  {
    name: "Mrs Elizabeth Obanla Adeola",
    img: eliza,
    maxWidth: 1000,
    position: "Treasurer",
  },
  {
    name: "Mr Anthony Buseni",
    img: exec,
    maxWidth: 1000,
    position: "General Secretary",
  },
];
export const titles2: nominees[] = [
  {
    title: "MEDIA PERSONALITY SPECIAL RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "TOURISM SPECIAL RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "G.O.M.A OF THE YEAR(POSTHUMOUS)",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "CINEMATOGRAPHER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "SKIT MAKER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "SPORTS PERSONALITY OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "VISUAL ARTS ARTIST OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "FASHION DESIGNER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "CREATIVE INDUSTRY'S FINANCIAR OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "COOPERATE SPONSOR (ARTS) OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "BI LATERAL SUPPORT/COLLABORATION SPECIAL RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "AMAN MEMBERS SPECIAL RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
];
export const titles: nominees[] = [
  {
    title: "LIFETIME ACHIEVEMENT",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "ARTIST MANAGER OF THE YEAR",
    isActive: true,
    id: Math.random() * 10000,
  },
  {
    title: "AMAN GOLDEN IMPACT RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "MOST ICONIC AFRICAN SONG OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "NOLYWOOD ACTOR OF THE YEAR (MALE)",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "NOLYWOOD ACTOR OF THE YEAR (FEMALE)",
    isActive: false,
    id: Math.random() * 10000,
  },

  {
    title: "HUMANITARIAN SPECIAL RECOGNITION",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "ARTIST OF THE YEAR (MALE)",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "ARTIST OF THE YEAR (FEMALE)",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "PRODUCER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "GOLDEN PERFORMANCE DJ OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "SONG WRITER OF THE YEAR",
    isActive: false,
    id: Math.random() * 10000,
  },
  {
    title: "CREATIVE INDUSTRIES SPECIAL RECOGNITION",
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
    name: "Oluwadamilola A Omokore",
    position: "Aman Awards Committee Secretary",
    img: dami,
    maxWidth: 269,
  },
  // {
  //   name: "Anthony Buseni Andrew",
  //   position: "Aman Awards Committee Secretary",
  //   img: omokore,
  //   maxWidth: 1000,
  // },
];
export const amanGroup: {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}[] = [
  // {
  //   name: "Mavin Grandpa",
  //   position: "AMAN President",
  //   img: chan,
  //   maxWidth: 269,
  // },
  {
    name: "David Nwachukwu",
    position: "AMAN Committee Chairman",
    img: nigga,
    maxWidth: 1000,
  },
  {
    name: "Dutchess Karifest Onyekaah Esq",
    position: "Vice chairman AMAN Awards Committee / Global Spokesperson",
    img: white,
  },
  {
    name: "Walliyah Abiola",
    position: "Marketing, Fund Raising & Public Relations.",
    img: waaliyah,
    maxWidth: 1000,
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
