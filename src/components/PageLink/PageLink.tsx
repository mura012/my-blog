import Link from "next/link";
import classes from "./PageLink.module.css";

type Props = {
  href: string;
  icon: any;
};

export const PageLink = ({ href, icon }: Props) => {
  return (
    <Link href={`/${href}`}>
      <div className={classes.linkWrapper}>
        <a>
          <>
            {icon}
            <p style={{ textTransform: "capitalize" }}>{href}</p>
          </>
        </a>
      </div>
    </Link>
  );
};
