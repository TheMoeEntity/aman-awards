import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import Back from "../../public/images/bg.png";
import Image from "next/image";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { CSSProperties } from "react";

const Timer = () => {
  const styles: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "999999999999",
    transform: "translate(-50%,-50%)",
  };
  return (
    <section style={{ position: "relative" }}>
      {/* <div style={styles} className="bg-black/70 absolute w-full h-full">
        <Image
          style={{ objectFit: "cover" }}
          src={Back}
          alt="Clock Image"
          fill={true}
          blurDataURL={
            "https://dri.es/files/images/blog/lazy-loading-images-placeholder-1.jpg"
          }
          className="w-full h-full object-cover"
          quality={100}
          priority={true}
          sizes="(max-width: 800px) 100vw, (max-width: 100%) 50vw, 33vw"
        />
      </div> */}

      <div className="absolute flex flex-row items-center text-center">
        <h1 className="text-[2rem] mb-[1rem]">Launching Soon</h1>
        <h3 className="font-light max-w-[300px] md:max-w-[450px] mb-[3rem]">
          Leave your email and {`we'll `}get across to you once we launch!!!
        </h3>

        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
          style={styles}
        />
      </div>
    </section>
  );
};

export default Timer;
