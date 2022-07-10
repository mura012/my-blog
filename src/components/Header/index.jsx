import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "/image/twittericon.png";
import Twitter from "/image/Twitter logo/PNG/2021 Twitter logo - white.png";
import Git from "/image/github_icon.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.imageWrapper}>
        <Image
          src={Icon}
          alt="icon"
          className={classes.image}
          width={80}
          height={80}
        />
      </div>
      <div className={classes.linkWrapper}>
        {/* <Link href="https://twitter.com/most_love08">
          <a className={classes.link}>
            <p>@most_love08</p>
            <Image src={Twitter} alt="twittericon" width={30} height={30} />
          </a>
        </Link>
        <Link href="https://github.com/mura012">
          <a className={`${classes.link} ${classes.git}`}>
            <p>most_love08</p>
            <Image src={Git} alt="giticon" width={30} height={30} />
          </a>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
