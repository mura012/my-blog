import Image from "next/image";
import classes from "./Links.module.css";
import { PageLink } from "src/components/PageLink";
import { IconArticle, IconEyeglass, IconUserCircle } from "@tabler/icons";

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
        <PageLink href="blog" icon={<IconArticle width={130} height={130} />} />
        <PageLink
          href="portfolio"
          icon={<IconEyeglass width={130} height={130} />}
        />
        <PageLink
          href="profile"
          icon={<IconUserCircle width={130} height={130} />}
        />
      </div>
    </nav>
  );
};
