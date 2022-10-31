import Link from "next/link";
import classes from "./Footer.module.css";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className={classes.footer}>
      <p className={classes.question}>
        連絡は
        <Link href="https://twitter.com/most_love08">
          <a className={classes.twitterLink}>ツイッターのDM</a>
        </Link>
        にお願いします。
      </p>
      <p className={classes.copyright}>© {date.getFullYear()} 武良</p>
    </footer>
  );
};
