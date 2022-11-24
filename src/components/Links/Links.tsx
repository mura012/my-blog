import Image from "next/image";
import classes from "./Links.module.css";
import { PageLink } from "src/components/PageLink";

export const Links = () => {
  return (
    <nav className={classes.nav}>
      <Image
        src="/image/twittericon.png"
        alt="icon"
        width={80}
        height={80}
        className={classes.icon}
      />
      <div className={classes.links}>
        <PageLink href="blog" img="/image/creative.png" />
        <PageLink href="portfolio" img="/image/light.png" />
        <PageLink href="profile" img="/image/human.png" />
      </div>
    </nav>
  );
};
