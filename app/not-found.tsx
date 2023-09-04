"use client";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>
              404 - The Requested Page{" "}
              {pathName !== "/not-found" && `"${pathName}"`}
              {` can't`} be found
            </h2>
          </div>
          <Link href={`/`}>
            <span> Go To Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
