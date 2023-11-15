import _5star from "../public/images/5 star.jpg";
import _7speed from "../public/images/7 Speed.jpg";
import _042 from "../public/images/042.jpg";
import adaora from "../public/images/ADAORA ELONU.jpg";
import adesuwa from "../public/images/Adesuwa Etomi.jpg";
import alexCross from "../public/images/Alex Cross.jpg";
import allenOnyema from "../public/images/Allen Onyema.jpg";
import andreVibez from "../public/images/Andre Vibez.jpg";
import stitches from "../public/images/AY Stitches.jpg";
import ayraStarr from "../public/images/Ayra Starr.jpg";
import bimbo from "../public/images/Bimbo Ademoye.jpg";
import shaggi from "../public/images/Broda Shaggi.jpg";
import chico from "../public/images/Chico.jpg";
import osita from "../public/images/CHIEF OSITA OKUKOGWU.jpg";
import monday from "../public/images/CHIEF SIR MONDAY JOHN ONYEME.jpg";
import chinenye from "../public/images/Chinenye Nnebe.jpg";
import nigga from "../public/images/David IfeanyiChukwu Abiodun Nwachukwu.jpg";
import chizoba from "../public/images/Chizoba Nwokoye.jpg";
import freeze from "../public/images/Daddy Freeze.jpg";
import djbign from "../public/images/DJ BIG N.jpg";
import spinall from "../public/images/DJ SPINALL.jpg";
import dmw from "../public/images/DMW RECORD LABEL.jpg";
import jazzy from "../public/images/Don Jazzy.jpg";
import emoney from "../public/images/E MONEY.jpg";
import eddie from "../public/images/Eddie Jay Omo.....jpg";
import lawani from "../public/images/Edi Lawani.jpg";
import falz from "../public/images/Falz.jpg";
import favor from "../public/images/Favour Chuks.png";
import flavor from "../public/images/Flavour.jpg";
import fredrick from "../public/images/Fredrick Leonard.jpg";
import gabriel from "../public/images/GABRIEL AFOLAYAN.jpg";
import gilbert from "../public/images/GILBERT ODIGIE OBOH.jpg";
import idowu from "../public/images/IDOWU ADEDAPO.jpg";
import ikogosi from "../public/images/IKOGOSI WARM SPRING RESORT.jpg";
import drille from "../public/images/Johnny Drille.jpg";
import rone from "../public/images/JULIUS RONE.jpg";
import kcee from "../public/images/Kcee.jpg";
import kelechi from "../public/images/Kelechi Amadi Obi.jpg";
import Kenny from "../public/images/Kenny Ogungbe.jpg";
import kim from "../public/images/Kim Lawani.jpg";
import kukbeatz from "../public/images/KUKBEATZ.jpg";
import london from "../public/images/LONDON.jpg";
import Mbryo from "../public/images/Mbryo.jpg";
import momodu from "../public/images/Momodu Abubakar Joseph.jpg";
import macaroni from "../public/images/MR. MACARONI.jpg";
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
        image: gabriel,
        nomination: "Nollywood actor of the year Award (Male)",
      },
      {
        name: "Tobi Bakre",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Male)",
      },
      {
        name: "Fredrick Leonard",
        image: fredrick,
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
        image: ayraStarr,
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
        image: dmw,
        nomination: "AMAN Golden Global Impact Recognition Award",
      },
      {
        name: "Five Star Music Label",
        image: _5star,
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
        image: gilbert,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Chief Osita Okukogu",
        image: osita,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Tunji Olalere",
        image: lawal,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Kim Lawani",
        image: kim,
        nomination: "G.O.M.A of the year (Posthumous)",
      },
      {
        name: "Eddie Jay Omodiaogbe",
        image: eddie,
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
        image: adaora,
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
        image: idowu,
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
        image: jazzy,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Sunday Areh",
        image: lawal,
        nomination: "Lifetime Achievement Award",
      },
      {
        name: "Edi Lawani",
        image: lawani,
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
        image: favor,
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
        image: allenOnyema,
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
        image: falz,
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
        image: Kenny,
        nomination: "Creative industries special recognition Award",
      },
      {
        name: "Pretty Okafor",
        image: lawal,
        nomination: "Creative industries special recognition Award",
      },
      {
        name: "E Money",
        image: emoney,
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
        image: flavor,
        nomination: "Most Iconic African Song of the year Award",
      },
      {
        name: "Ojapiano - Kcee",
        image: kcee,
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
        image: rone,
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
        image: macaroni,
        nomination: "Skit maker of the year Award",
      },
      {
        name: "Broda Shaggi",
        image: shaggi,
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
        image: stitches,
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
        image: ikogosi,
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
        image: kelechi,
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
        image: djbign,
        nomination: "Golden Performance DJ of the year Award",
      },
      {
        name: "DJ Spinall",
        image: spinall,
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
        image: Mbryo,
        nomination: "Song Writer of the year Award",
      },
      {
        name: "Omah Lay",
        image: lawal,
        nomination: "Song Writer of the year Award",
      },
      {
        name: "Johnny Drille",
        image: drille,
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
        image: momodu,
        nomination: "Best Emerging Actor In Role Interpretation (Male) Award",
      },
      {
        name: "Alex Cross",
        image: alexCross,
        nomination: "Best Emerging Actor In Role Interpretation (Male) Award",
      },
      {
        name: "042 Prince Jay",
        image: _042,
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
        image: bimbo,
        nomination: "Nollywood actor of the year Award (Female)",
      },
      {
        name: "Uju Okoli",
        image: lawal,
        nomination: "Nollywood actor of the year Award (Female)",
      },
      {
        name: "Adesuwa Etomi",
        image: adesuwa,
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
        image: freeze,
        nomination: "Media personality special recognition Award",
      },
      {
        name: "Chico",
        image: chico,
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
        image: andreVibez,
        nomination: "Producer of the year Award",
      },
      {
        name: "Kukbeat",
        image: kukbeatz,
        nomination: "Producer of the year Award",
      },
      {
        name: "London",
        image: london,
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
        image: chizoba,
        nomination: "Best Emerging Actor In Role Interpretation (Female) Award",
      },
      {
        name: "Chinenye Nnebe",
        image: chinenye,
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
