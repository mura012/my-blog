import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/Header";
import { client } from "src/lib/client";
import classes from "./id.module.css";
import dayjs from "dayjs";
import { Footer } from "src/components/footer/Footer";

const BlogId = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <div className={classes.blogWrapper}>
        <h1 className={classes.blogTitle}>{props.title}</h1>
        <time dateTime={props.pblisheaAt}>
          {dayjs(props.publishedAt).format("投稿日:YYYY年MM月DD日")}
        </time>
        <div dangerouslySetInnerHTML={{ __html: props.body }} />
        <Link href="/blog">
          <a className={classes.back}>戻る</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blogPage/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export default BlogId;
