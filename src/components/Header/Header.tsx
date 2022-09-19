import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "src/image/twittericon.png";

type Nav = {
  link: string;
  text: string;
}[];

export const Header = () => {
  const NAVITEMS: Nav = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/blog",
      text: "Blog",
    },
    {
      link: "/portfolio",
      text: "Portfolio",
    },
    {
      link: "/profile",
      text: "Profile",
    },
  ];

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.linkInImageWrapper}>
          <Image
            src={Icon}
            alt="icon"
            className={classes.image}
            width={80}
            height={80}
          />
        </div>
      </Link>
      <nav className={classes.imageWrapper}>
        <div className={classes.navLink}>
          {NAVITEMS.map((navItem) => {
            return (
              <Link href={navItem.link} key={navItem.link}>
                <a>
                  <h2 className={classes.title}>{navItem.text}</h2>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
