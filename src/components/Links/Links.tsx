import Image from "next/image";
import classes from "./Links.module.css";
import blog from "src/image/creative.png";
import portfolio from "src/image/light.png";
import profile from "src/image/human.png";
import Icon from "src/image/twittericon.png";
import { PageLink } from "src/components/PageLink";

export const Links = () => {
  return (
    <nav className={classes.nav}>
      <Image
        src={Icon}
        alt="icon"
        width={80}
        height={80}
        className={classes.icon}
      />
      <div className={classes.links}>
        <PageLink href="blog" src={blog} />
        <PageLink href="portfolio" src={portfolio} />
        <PageLink href="profile" src={profile} />
      </div>
    </nav>
  );
};
