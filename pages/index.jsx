import Head from "next/head";
import styles from "../styles/Home.module.css";
import { icon } from "../image/twittericon.jpg";
import { Twitter } from "../image/Twitter logo/PNG/2021 Twitter logo - blue.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src={icon} alt="icon" width={30} height={30}></Image>
        <Link href="https://twitter.com/most_love08">
          <a>
            <Image src={Twitter} alt="twittericon" width={32} height={32} />
          </a>
        </Link>
        <Link href="./newArticles.jsx">
          <a>新着記事</a>
        </Link>
      </header>
    </div>
  );
}
