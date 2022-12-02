import Link from "next/link";
import React from "react";
import classes from "./MyLinkButton.module.css";
type Props = {
  href: string;
  buttonColor: string;
  icon: any;
};

export const MyLinkButton = ({ href, buttonColor, icon }: Props) => {
  return (
    <Link href={href}>
      <a className={classes.myPage} style={{ backgroundColor: buttonColor }}>
        {icon}
      </a>
    </Link>
  );
};
