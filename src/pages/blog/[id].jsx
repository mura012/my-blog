import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { client } from "src/lib/client";
import classes from "./id.module.css";

const BlogId = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <div className={classes.blogWrapper}>
        <h1 className={classes.blogTitle}>{props.title}</h1>
        <time>{props.publishedAt}</time>
        <div dangerouslySetInnerHTML={{ __html: props.body }} />
        <Link href="/blog">
          <a>戻る</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
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
