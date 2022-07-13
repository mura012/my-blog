import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "/image/twittericon.png";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.imageWrapper}>
        <Link href="/">
          <Image
            src={Icon}
            alt="icon"
            className={classes.image}
            width={80}
            height={80}
          />
        </Link>
        <div className={classes.headerLink}>
          <Link href="/">
            <h2 className={classes.title}>Home</h2>
          </Link>
          <Link href="/blog">
            <h2 className={classes.title}>Blog</h2>
          </Link>
          <Link href="/portfolio">
            <h2 className={classes.title}>Portfolio</h2>
          </Link>
          <Link href="/profile">
            <h2 className={classes.title}>Profile</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};
