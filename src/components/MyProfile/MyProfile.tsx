import classes from "./Profile.module.css";

export const MyProfile = () => {
  return (
    <div className={classes.profile}>
      <p className={classes.ruby}>むら</p>
      <h1 className={classes.name}>武良</h1>
      <p className={classes.job}>フロントエンドエンジニアになるために勉強中</p>
      <h2 className={classes.h2}>生年月日</h2>
      <p className={classes.text}>2001年8月28日生まれ(21歳)</p>
      <h2 className={classes.h2}>出身地</h2>
      <p className={classes.text}>鳥取県</p>
      <h2 className={classes.h2}>技術スタック</h2>
      <ol className={classes.ol}>
        <li className={classes.text}>HTML</li>
        <li className={classes.text}>CSS</li>
        <li className={classes.text}>JavaScript</li>
        <li className={classes.text}>TypeScript</li>
        <li className={classes.text}>React(Next.js)</li>
        <li className={classes.text}>tailwindcss</li>
      </ol>
    </div>
  );
};
