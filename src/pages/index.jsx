import Head from "next/head";
import { Footer } from "src/components/footer";
import { Introduction } from "src/components/Introduction";
import { Links } from "src/components/Links";
import classes from "src/styles/Home.module.css";

const Home = (props) => {
  console.log(props.contents);
  return (
    <div className={classes.home}>
      <Head>
        <title>most_love</title>
      </Head>
      <Links />
      <Introduction />
      <Footer />
    </div>
  );
};

export default Home;
