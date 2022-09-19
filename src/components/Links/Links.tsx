import Image from "next/image";
import Link from "next/link";
import classes from "./Links.module.css";
import blog from "src/image/creative.png";
import portfolio from "src/image/light.png";
import profile from "src/image/human.png";
import Icon from "src/image/twittericon.png";

export const Links = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <Image
          src={Icon}
          alt="icon"
          width={80}
          height={80}
          className={classes.icon}
        />
      </Link>
      <div className={classes.links}>
        <Link href="/blog">
          <div className={classes.linkWrapper}>
            <a className={classes.link}>
              <Image src={blog} alt="blog" width={150} height={120} />
              <p>Blog</p>
            </a>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className={`${classes.linkWrapper} ${classes.center}`}>
            <a className={`${classes.link} ${classes.center}`}>
              <Image src={portfolio} alt="portfolio" width={90} height={120} />
              <p>Portfolio</p>
            </a>
          </div>
        </Link>
        <Link href="/profile">
          <div className={classes.linkWrapper}>
            <a className={classes.link}>
              <Image src={profile} alt="profile" width={100} height={120} />
              <p>Profile</p>
            </a>
          </div>
        </Link>
      </div>
    </nav>
  );
};
