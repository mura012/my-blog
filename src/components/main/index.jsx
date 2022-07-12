import Image from "next/image";
import Link from "next/link";
import classes from "./Main.module.css";
import blog from "image/creative.png";
import portfolio from "image/light.png";
import plofile from "image/human.png";
import Icon from "/image/twittericon.png";

const Links = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <Image
          src={Icon}
          alt="icon"
          width={100}
          height={100}
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
        <Link href="/plofile">
          <div className={classes.linkWrapper}>
            <a className={classes.link}>
              <Image src={plofile} alt="plofile" width={100} height={120} />
              <p>Plofile</p>
            </a>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Links;
