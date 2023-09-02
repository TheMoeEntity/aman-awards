import Image from "next/image";
import styles from "./index.module.css";
import profile from "../../public/images/presi.jpg";
import awards from "../../public/images/aman-logo.png";
import { blogType } from "@/Helpers";

const PostPage = ({ post }: any) => {
  return (
    <div className={styles.posts}>
      <div className={styles.blog}>
        <div className={styles.profile}>
          <div>
            <Image
              src={awards}
              alt="logo"
              style={{ objectFit: "cover" }}
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <b>AMAN Executives</b> <br />
            <span>1st September, 2023</span>
          </div>
        </div>
        <h1>{(post as blogType).blog_title}</h1>
        <div className={styles.blogImage}>
          <Image
            style={{ objectFit: "contain" }}
            src={`/images/${(post as blogType).blog_image}`}
            alt="mavinG"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 395px) 50vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          {(post as blogType).paragraphs.map((x, i) => (
            <p key={i}>{x}</p>
          ))}

          {(post as blogType).headings !== undefined &&
            (post as blogType).headings?.map((x, i) => (
              <div key={i}>
                <h2>{x.title}</h2>
                <p>{x.content}</p>
              </div>
            ))}

          {/* <h2>BACKGROUND BELIEF</h2>
          <p>
            AMAN was registered in 1995 with the sole aim of furthering the
            interests of creative minds within the creative industries in
            Nigeria, with thirteen core objectives, amongst which are; mentoring
            of artistes in the Nigeria creative industries, management of
            artistes, promoting their welfare, sponsoring of events that
            nurtures, promotes and harnesses potentials within the industries. 
          </p>

          <p>
            AMAN as an organization has the welfare of artistes and creatives in
            Nigeria as its main objective. Its scope of operation are in three
            core areas, namely; The AMAN AWARDS, AMAN FESTIVAL and AMAN ARTISTES
            TALENT DEVELOPMENT
          </p>

          <p>
            The AMAN FESTIVAL is a yearly music festival organized to nurture,
            harness, and celebrate talents in the music industry, to expand our
            music at the frontiers of the international music industry. Through
            this festival, AMAN is set to scout, train and expose our young
            talents to the world for greater industry success.
          </p>
          <p>
            The ARTISTES TALENT DEVELOPMENT is where budding talents are given
            the opportunity of nurturing, nourishing and harnessing their
            talents to profit them on the global scene, starting from Nigeria.
          </p>
          <h2>OUR GOAL</h2>
          <p>
            AMAN will give economic advantage to Nigeria by stimulating local
            economy of host communities, through tourism promotion, by
            showcasing our indigenous arts, crafts and culture. The president,
            stated that AMAN is positioning our creatives for greater patronage
            and recognition globally, especially our music. In his words,
            {` "As we
            reposition certain elements that plays within the creative
            industries for the greater good of Nigerian creatives globally, AMAN
            is also contributing to the promotion of new wave Nigerian popular
            music, Afro hip hop and other genres of Nigerian music which are
            highly sought after in the music industry internationally."`}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
