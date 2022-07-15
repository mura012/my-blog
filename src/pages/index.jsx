import Head from "next/head";
import { Footer } from "src/components/footer/Footer";
import { Introduction } from "src/components/introduction";
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
