import classes from "./Profile.module.css";

export const MyProfile = () => {
  return (
    <div className={classes.profile}>
      <h1 className={classes.name}>武良</h1>
      <p className={classes.alphabet}>MURA</p>
      <p className={classes.job}>フロントエンドエンジニアになるために勉強中</p>
      <h2 className={classes.h2}>生年月日</h2>
      <p>2001年8月28日生まれ(20歳)</p>
      <h2 className={classes.h2}>出身</h2>
      <p>鳥取県境港市</p>
      <h2 className={classes.h2}>技術スタック（レベル０）</h2>
      <ol className={classes.ol}>
        <li>▶HTML</li>
        <li>▶CSS</li>
        <li>▶JavaScript</li>
        <li>▶React(Next.js)</li>
      </ol>
      <h2 className={classes.h2}>趣味</h2>
      <h4>運動、漫画、お笑い鑑賞</h4>
      <p>
        勉強していない時間はだいたいこのどれかをしています。
        <br />
        ゲームは得意でないのであまりしません。
      </p>
    </div>
  );
};
