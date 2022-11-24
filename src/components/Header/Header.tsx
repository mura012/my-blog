import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "src/image/twittericon.png";
import { useRouter } from "next/router";

type Nav = {
  link: string;
  text: string;
}[];

export const Header = () => {
  const router = useRouter();
  const NAVITEMS: Nav = [
    {
      link: "/",
      text: "home",
    },
    {
      link: "/blog",
      text: "blog",
    },
    {
      link: "/portfolio",
      text: "portfolio",
    },
    {
      link: "/profile",
      text: "profile",
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
      <nav className={classes.navLink}>
        {NAVITEMS.map((navItem) => {
          return (
            <Link href={navItem.link} key={navItem.link}>
              <a
                style={{
                  borderBottom:
                    navItem.link === router.pathname
                      ? "2px solid rgb(192, 192, 192)"
                      : undefined,
                }}
                className={classes.title}
              >
                <h2 className={classes.text}>{navItem.text}</h2>
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
