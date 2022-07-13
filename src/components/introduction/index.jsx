import Image from "next/image";
import Link from "next/link";
import classes from "./Introduction.module.css";
import Twitter from "image/Twitter logo/PNG/2021 Twitter logo - white.png";
import Git from "image/github_icon.png";

export const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <h1>武良 (most_love)</h1>

      <div className={classes.wrapper}>
        <Link href="https://twitter.com/most_love08">
          <a className={classes.myPage}>
            <Image
              src={Twitter}
              alt="twittericon"
              width={30}
              height={30}
              className={classes.linkIcon}
            />
          </a>
        </Link>
        <Link href="https://github.com/mura012">
          <a className={`${classes.myPage} ${classes.git}`}>
            <Image
              src={Git}
              alt="giticon"
              width={30}
              height={30}
              className={classes.linkIcon}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
