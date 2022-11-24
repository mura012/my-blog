import Image from "next/image";
import Link from "next/link";
import classes from "./PageLink.module.css";

type Props = {
  href: string;
  img: string;
};

export const PageLink = ({ href, img }: Props) => {
  return (
    <Link href={`/${href}`}>
      <div className={classes.linkWrapper}>
        <a>
          <Image src={img} alt={href} width={120} height={120} />
          <p style={{ textTransform: "capitalize" }}>{href}</p>
        </a>
      </div>
    </Link>
  );
};
