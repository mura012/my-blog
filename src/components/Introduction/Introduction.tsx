import classes from "./Introduction.module.css";
import Twitter from "src/image/Twitter logo/PNG/2021 Twitter logo - white.png";
import Git from "src/image/github_icon.png";
import { MyLinkButton } from "src/components/MyLinkButton";

export const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <h1>武良 (most_love)</h1>

      <div className={classes.wrapper}>
        <MyLinkButton
          href="https://twitter.com/most_love08"
          buttonColor="rgb(87, 163, 227)"
          icon={Twitter}
        />
        <MyLinkButton
          href="https://github.com/mura012"
          buttonColor="gray"
          icon={Git}
        />
      </div>
    </div>
  );
};
