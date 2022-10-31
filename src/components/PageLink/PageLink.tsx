import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import classes from "./PageLink.module.css";

type Props = {
  href: string;
  src: StaticImageData;
};

export const PageLink = ({ href, src }: Props) => {
  return (
    <Link href={`/${href}`}>
      <div className={classes.linkWrapper}>
        <a>
          <Image src={src} alt={href} width={120} height={120} />
          <p>Blog</p>
        </a>
      </div>
    </Link>
  );
};
