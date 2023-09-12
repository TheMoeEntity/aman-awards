import { StaticImageData } from "next/image";

import nigga from "../public/images/david.jpeg";
import white from "../public/images/Dutchess Karifest Onyekaah.jpg";
import chan from "../public/images/presi.jpg";
import waaliyah from "../public/images/Walliyah Abiola.jpg";
import dami from "../public/images/3.png";
import eliza from "../public/images/exec1.jpeg";
import ike from "../public/images/exec2.jpeg";
import lawal from "../public/images/lawal.jpg";
import awards from "../public/images/awards.jpg";
import exec from "../public/images/sec2.jpg";
import plaque from "../public/images/plaque2.jpg";
import { amanGroupType, blogPostsType, execType, nominees } from "./types";
import { getDocuments } from "./firebase";

export class Helpers {
  static checkValid = (pathname: string): boolean => {
    const validRoutes: string[] = [
      "/localhost:3000",
      "/",
      "https://www.amanawards.com/",
      "https://www.amanawards.ng/",
      "/posts/" + pathname.slice(7, pathname.length),
    ];
    return validRoutes.includes(pathname);
  };
  static getData = async () => {
    try {
      return await getDocuments();
    } catch (error) {
      return null;
    }
  };
  static getSingle = async (slug: string) => {
    const data = await this.getData();
    if (!data) return;
    const single = data.find((x) => {
      return x.slug == slug;
    });
    return single;
  };
}

export const blogPosts: blogPostsType[] = [
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
export const amanExecs: execType[] = [
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
    name: "Mr iKECHUKWU (Black PHARAOH) Onuorah",
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

export const amanGroup2: amanGroupType[] = [
  {
    name: "Walliyah Abiola",
    position: "Marketing, Fund Raising & Public Relations.",
    img: waaliyah,
    maxWidth: 1000,
  },
];
export const amanGroup: amanGroupType[] = [
  // {
  //   name: "Mavin Grandpa",
  //   position: "AMAN President",
  //   img: chan,
  //   maxWidth: 269,
  // },
  {
    name: "David Nwachukwu",
    position: "AMAN Awards Committee - Chairman/AMAN, Project Director",
    img: nigga,
    maxWidth: 1000,
  },
  {
    name: "Dutchess Karifest Onyekaah Esq",
    position: "AMAN Awards Committee - Vice chairman / Global Spokesperson",
    img: white,
  },
  {
    name: "Oluwadamilola A Omokore",
    position: "Aman Awards Committee - Secretary",
    img: dami,
    maxWidth: 269,
  },
].concat(amanGroup2);
