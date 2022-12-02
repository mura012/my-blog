import classes from "./Introduction.module.css";
import { MyLinkButton } from "src/components/MyLinkButton";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons";

export const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <h1>武良 (@most_love)</h1>

      <div className={classes.wrapper}>
        <MyLinkButton
          href="https://twitter.com/most_love08"
          buttonColor="rgb(87, 163, 227)"
          icon={<IconBrandTwitter width={35} height={35} />}
        />
        <MyLinkButton
          href="https://github.com/mura012"
          buttonColor="gray"
          icon={<IconBrandGithub width={35} height={35} />}
        />
      </div>
    </div>
  );
};
