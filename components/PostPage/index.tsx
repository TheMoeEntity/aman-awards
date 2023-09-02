import Image from "next/image";
import styles from "./index.module.css";
import profile from "../../public/images/presi.jpg";
import awards from "../../public/images/aman-logo.png";

const PostPage = () => {
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
        <h1>AMAN set to promote creativity with awards</h1>
        <div className={styles.blogImage}>
          <Image
            style={{ objectFit: "contain" }}
            src={profile}
            alt="mavinG"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 395px) 50vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          <p>
            AMAN an acronym for Artiste Managers Association In Nigeria, a
            non-governmental, non-profit group, is an organization in Nigeria,
            which was set up to manage, improve and promote the welfare of
            artistes and creatives within the creative industries in Nigeria. As
            an organization, AMAN serves as a springboard to stardom for
            creatives and budding talents.
          </p>

          <p>
            In its scope of operation and going by the goals set by AMAN as an
            organization, it is set to further deepen the promotion of the
            creative industry with AMAN Awards at a ceremony billed for November
            26, 2023 in Eko Hotel and Suites, Victoria Island Lagos. 
          </p>

          <p>
            The AMAN AWARDS, which will be coming with all the glamour, fun and
            razzmatazz associated with such event, will be well attended by
            industry players and the who is who within the entertainment,
            corporate, political and creative industries amongst others. The
            AMAN AWARDS was instituted to recognise excellence, inspiring and
            celebrating various deserving players in the creative industries in
            Nigeria, as a way of encouraging excellence within and outside the
            industry. 
          </p>

          <p>
            A statement signed by the association’s President, Mr. Collins
            Ifeanyi Onwuneme Ajereh Enebeli (Mavin Grandpa), made available to
            the media, states that the honour is an industry night event
            designed to reward hard work within the Nigerian creative
            industries, promote such individuals and groups globally.  
          </p>

          <p>
            According to him, {`"The `}objective is to recognize, reward and
            celebrate the key players in the Nigerian creative industries for
            their numerous contributions towards the development and growth of
            the creative industries  in Nigeria’’
          </p>

          <p>
            He further said ,
            {` "It is to restore the confidence, dignity and
            interest of our young creatives who have the challenge of being
            influenced wrongly by western culture that has eroded their value
            for local contents in some way and influenced them negatively. It is
            believed that the award will encourage and recognize those creating
            the real African story in beautiful colours."`}
          </p>

          <p>
            He stressed further that the award will promote healthy
            competitiveness in the industries towards the attainment of
            {`industry's`} growth over time, aimed at bridging the gap in the
            creative industries between emerging talents and highly successful
            industry people. It will encourage non creatives to support the
            creative industries towards promoting Nigeria and {`Africa's`}{" "}
            battered image{` globally".`}
          </p>

          <p>
            CRITERIA for selecting nominees and awardees are categorized into:
            impact on local and global interest, Influence in content quality,
            acceptance, versatility, consistency, honesty, uprightness,
            credibility, equity, fairness, as well as achievements in
            mileage/value addition in the industry. 
          </p>

          <h2>BACKGROUND BELIEF</h2>
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
