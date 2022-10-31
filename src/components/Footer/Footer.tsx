import classes from "./Footer.module.css";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <p className={classes.question}>
          連絡は
          <a
            href="https://twitter.com/most_love08"
            className={classes.twitterLink}
          >
            ツイッターのDM
          </a>
          にお願いします。
        </p>
        <p className={classes.copyright}>© {date.getFullYear()} 武良</p>
      </div>
    </footer>
  );
};
