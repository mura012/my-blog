import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Layout } from "src/layout";
import classes from "./portfolio.module.css";

type Props = {
  id: number;
  title: string;
  text: string;
  link: string;
  img: string;
  imgShape: "square" | "rectangle";
};

const PortfolioData: Props[] = [
  {
    id: 1,
    title: "pokeRGBY",
    text: "ポケモン赤青緑ピカチュー版で旅をするときに欲しかったツールを開発しました",
    link: "https://www.pokergbytools.com/",
    img: "/image/pokemonRGBY.PNG",
    imgShape: "square",
  },
  {
    id: 2,
    title: "my-blog",
    text: "ブログサイトとして作っていたけどプロフィールなどもあってポートフォリオサイトになりました",
    link: "/",
    img: "/image/my-blog.PNG",
    imgShape: "square",
  },
  {
    id: 3,
    title: "UIbooks",
    text: "いろいろなUIを実装しました",
    link: "https://u-ibooks.vercel.app/",
    img: "/image/UIbook.PNG",
    imgShape: "rectangle",
  },
];

const Portfolio: FC = () => {
  return (
    <Layout title="ポートフォリオ">
      <ul>
        {PortfolioData.map((data) => {
          return (
            <li key={data.id} style={{ listStyle: "none" }}>
              <Link href={data.link}>
                <a className={classes.portfolioWrapper}>
                  <div className={classes.dataText}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                  </div>
                  <Image
                    src={data.img}
                    width={data.imgShape === "rectangle" ? 240 : 160}
                    height={data.imgShape === "rectangle" ? 120 : 160}
                    className={classes.dataImg}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Portfolio;
