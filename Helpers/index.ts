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
    title: "Nollywood actor of the year Award (Male)",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Gabriel Afolayan",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Male)",
      },
      {
        name: "Tobi Bakre",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Male)",
      },
      {
        name: "Fredrick Leonard",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Male)",
      },
    ],
  },
  {
    title: "Artiste Manager of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Sean Okeke",
        image: lawal,
        nomination: "Artiste Manager of the year Award",
      },
      {
        name: "7speed",
        image: lawal,
        nomination: "Artiste Manager of the year Award",
      },
      {
        name: "Stephen Nana",
        image: lawal,
        nomination: "Artiste Manager of the year Award",
      },
    ],
  },
  {
    title: "Artiste of the year Award (Female)",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Simi",
        image: lawal,
        nomination: "Artiste of the year Award (Female)",
      },
      {
        name: "Yemi Alade",
        image: lawal,
        nomination: "Artiste of the year Award (Female)",
      },
      {
        name: "Ayra Starr",
        image: lawal,
        nomination: "Artiste of the year Award (Female)",
      },
    ],
  },
  {
    title: "AMAN Golden Global Impact Recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "DMW Record Label",
        image: lawal,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
      {
        name: "Five Star Music Label",
        image: lawal,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
      {
        name: "Jonzing World",
        image: lawal,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
      {
        name: "Mavin Records",
        image: lawal,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
      {
        name: "YBNL Records",
        image: lawal,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
    ],
  },
  {
    title: "G.O.M.A of the year (Posthumous)",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Chief Gilbert Odigie Oboh",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Chief Osita Okukogu",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Tunji Olalere",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Kim Lawani",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Eddie Jay Omodiaogbe",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
    ],
  },
  {
    title: "Sports personality of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Adaora Elonu",
        image: lawal,
        nomination: "Sports personality of the year Award",
      },
      {
        name: "Tobi Amusan",
        image: lawal,
        nomination: "Sports personality of the year Award",
      },
      {
        name: "Victor Osimhen",
        image: lawal,
        nomination: "Sports personality of the year Award",
      },
    ],
  },
  {
    title: "Cinematographer of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Idowu Adedapo - King of Thieves, Road to Yesterday, Knock Out, Ijakumo",
        image: lawal,
        nomination: "Cinematographer of the year Award",
      },
      {
        name: "Toka Mcbaror - Dark October, Almajiri Herdsmen, Underbelly (the Journey)",
        image: lawal,
        nomination: "Cinematographer of the year Award",
      },
      {
        name: "Yinka Edward - Crime and Justice Lagos, The Milkmaid, Shuga",
        image: lawal,
        nomination: "Cinematographer of the year Award",
      },
    ],
  },
  {
    title: "Creative Industry's Financier of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Access Bank",
        image: lawal,
        nomination: "Creative Industry's Financier of the year Award",
      },
      {
        name: "GT Bank",
        image: lawal,
        nomination: "Creative Industry's Financier of the year Award",
      },
      {
        name: "BOI",
        image: lawal,
        nomination: "Creative Industry's Financier of the year Award",
      },
    ],
  },
  {
    title: "Bi Lateral Support/Collaboration Special Recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Alliance Francais",
        image: lawal,
        nomination:
          "Bi Lateral Support/Collaboration Special Recognition Award",
      },
      {
        name: "British Council",
        image: lawal,
        nomination:
          "Bi Lateral Support/Collaboration Special Recognition Award",
      },
      {
        name: "USAID",
        image: lawal,
        nomination:
          "Bi Lateral Support/Collaboration Special Recognition Award",
      },
    ],
  },
  {
    title: "Lifetime Achievement Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Don Jazzy",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Sunday Areh",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Edi Lawani",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
    ],
  },
  {
    title: "AMAN Artiste of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Irhay",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Favor Chuks",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Rayne",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
    ],
  },
  {
    title: "Humanitarian Special Recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Obi Cubana",
        image: lawal,
        nomination: "Humanitarian Special Recognition Award",
      },
      {
        name: "Alex Onyema",
        image: lawal,
        nomination: "Humanitarian Special Recognition Award",
      },
      {
        name: "Sen Ned Nwoko",
        image: lawal,
        nomination: "Humanitarian Special Recognition Award",
      },
      {
        name: "Deputy Governor Delta State",
        image: lawal,
        nomination: "Humanitarian Special Recognition Award",
      },
    ],
  },
  {
    title: "Artiste of the year Award (Male)",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "KCee",
        image: lawal,
        nomination: "Artiste of the year Award (Male)",
      },
      {
        name: "Falz",
        image: lawal,
        nomination: "Artiste of the year Award (Male)",
      },
      {
        name: "Rema",
        image: lawal,
        nomination: "Artiste of the year Award (Male)",
      },
    ],
  },
  {
    title: "Creative industries special recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Kenny Ogungbe",
        image: lawal,
        nomination: "Creative industries special recognition Award",
      },
      {
        name: "Pretty Okafor",
        image: lawal,
        nomination: "Creative industries special recognition Award",
      },
      {
        name: "E Money",
        image: lawal,
        nomination: "Creative industries special recognition Award",
      },
    ],
  },
  {
    title: "Most Iconic African Song of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Asiwaju - Ruger",
        image: lawal,
        nomination: "Most Iconic African Song of the year Award",
      },
      {
        name: "Game Changer - Flavor",
        image: lawal,
        nomination: "Most Iconic African Song of the year Award",
      },
      {
        name: "Ojapiano - Kcee",
        image: lawal,
        nomination: "Most Iconic African Song of the year Award",
      },
    ],
  },
];
export const titles: nominees[] = [
  {
    title: "Innovation & Technology Award",
    isActive: true,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Julius Rone",
        image: lawal,
        nomination: "Innovation & Technology Award",
      },
      {
        name: "Mustapha Gajabo",
        image: lawal,
        nomination: "Innovation & Technology Award",
      },
      {
        name: "Afe Babalola University",
        image: lawal,
        nomination: "Innovation & Technology Award",
      },
    ],
  },
  {
    title: "Skit maker of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Mr Macaroni",
        image: lawal,
        nomination: "Skit maker of the year Award",
      },
      {
        name: "Broda Shaggi",
        image: lawal,
        nomination: "Skit maker of the year Award",
      },
      {
        name: "Mr Funny a.k.a Sabinus",
        image: lawal,
        nomination: "Skit maker of the year Award",
      },
    ],
  },
  {
    title: "Fashion Designer of the Year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Yomi Casual",
        image: lawal,
        nomination: "Fashion Designer of the Year Award",
      },
      {
        name: "Niddle and Stitches",
        image: lawal,
        nomination: "Fashion Designer of the Year Award",
      },
      {
        name: "AY Stitches",
        image: lawal,
        nomination: "Fashion Designer of the Year Award",
      },
    ],
  },
  {
    title: "Cooperate Sponsor (Arts) of the Year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "GLO",
        image: lawal,
        nomination: "Cooperate Sponsor (Arts) of the Year Award",
      },
      {
        name: "MTN",
        image: lawal,
        nomination: "Cooperate Sponsor (Arts) of the Year Award",
      },
      {
        name: "Multi Choice",
        image: lawal,
        nomination: "Cooperate Sponsor (Arts) of the Year Award",
      },
    ],
  },
  {
    title: "Tourism Special Recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Lagos Marriot",
        image: lawal,
        nomination: "Tourism Special Recognition Award",
      },
      {
        name: "Wakanow",
        image: lawal,
        nomination: "Tourism Special Recognition Award",
      },
      {
        name: "Ikogosi Waem Spring Resort",
        image: lawal,
        nomination: "Tourism Special Recognition Award",
      },
    ],
  },
  {
    title: "Visual Arts Artiste of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Kelechi Amadi Obi",
        image: lawal,
        nomination: "Visual Arts Artiste of the year Award",
      },
      {
        name: "Philip Trimnell",
        image: lawal,
        nomination: "Visual Arts Artiste of the year Award",
      },
      {
        name: "Peju Alatise",
        image: lawal,
        nomination: "Visual Arts Artiste of the year Award",
      },
    ],
  },

  {
    title: "Golden Performance DJ of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "DJ Neptune",
        image: lawal,
        nomination: "Golden Performance DJ of the year Award",
      },
      {
        name: "DJ Big N",
        image: lawal,
        nomination: "Golden Performance DJ of the year Award",
      },
      {
        name: "DJ Spinall",
        image: lawal,
        nomination: "Golden Performance DJ of the year Award",
      },
    ],
  },
  {
    title: "Song Writer of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Mbryo",
        image: lawal,
        nomination: "Song Writer of the year Award",
      },
      {
        name: "Omah Lay",
        image: lawal,
        nomination: "Song Writer of the year Award",
      },
      {
        name: "Johnny Drille",
        image: lawal,
        nomination: "Song Writer of the year Award",
      },
    ],
  },
  {
    title: "Best Emerging Actor In Role Interpretation (Male) Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Momodu Abubakar Joseph",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Male) Award",
      },
      {
        name: "Alex Cross",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Male) Award",
      },
      {
        name: "042 Prince Jay",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Male) Award",
      },
    ],
  },
  {
    title: "Nollywood actor of the year Award (Female)",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Bimbo Ademoye",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Female)",
      },
      {
        name: "Uju Okoli",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Female)",
      },
      {
        name: "Adesuwa Etomi",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Female)",
      },
    ],
  },
  {
    title: "Media personality special recognition Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Nedu",
        image: lawal,
        nomination: "Media personality special recognition Award",
      },
      {
        name: "Daddy Freeze",
        image: lawal,
        nomination: "Media personality special recognition Award",
      },
      {
        name: "Chico",
        image: lawal,
        nomination: "Media personality special recognition Award",
      },
    ],
  },
  {
    title: "Producer of the year Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Andrew Vibez",
        image: lawal,
        nomination: "Producer of the year Award",
      },
      {
        name: "Kukbeat",
        image: lawal,
        nomination: "Producer of the year Award",
      },
      {
        name: "London",
        image: lawal,
        nomination: "Producer of the year Award",
      },
    ],
  },
  {
    title: "Best Emerging Actor In Role Interpretation (Female) Award",
    isActive: false,
    id: Math.random() * 10000,
    nominees: [
      {
        name: "Chizoba Nwokoye",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Female) Award",
      },
      {
        name: "Chinenye Nnebe",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Female) Award",
      },
      {
        name: "Nwaoha Chioma Blessing",
        image: lawal,
        nomination: "Best Emerging Actor In Role Interpretation (Female) Award",
      },
    ],
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
