import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./MyLinkButton.module.css";

type Props = {
  href: string;
  buttonColor: string;
  icon: StaticImageData;
  width: number;
  height: number;
};

export const MyLinkButton = ({
  href,
  buttonColor,
  icon,
  width,
  height,
}: Props) => {
  return (
    <Link href={href}>
      <a className={classes.myPage} style={{ backgroundColor: buttonColor }}>
        <Image src={icon} alt={`${icon}.icon`} width={width} height={height} />
      </a>
    </Link>
  );
};
