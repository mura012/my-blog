import Head from "node_modules/next/head";
import { FC } from "react";
import { Introduction } from "src/components/Introduction/Introduction";
import { Links } from "src/components/Links/Links";
import classes from "src/styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={classes.home}>
      <Head>
        <title>most_love</title>
      </Head>
      <Links />
      <Introduction />
    </div>
  );
};

export default Home;
