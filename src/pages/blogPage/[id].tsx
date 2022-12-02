import Link from "next/link";
import Head from "next/head";
import { client } from "src/lib/client";
import classes from "./id.module.css";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "../blog";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Layout } from "src/layout";
import { IconBrandTwitter } from "@tabler/icons";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.mura-mostlove.com/blogPage/${props.id}`}
        />
        <meta property="og:img" content={props.image.url} />
        <meta property="og:title" content={props.title} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className={classes.blogWrapper}>
        <a
          href={`http://twitter.com/share?url=https://www.mura-mostlove.com/blogPage/${props.id}&via=most_love08`}
          data-show-count="false"
          target="_blank"
          className={classes.shareTwitter}
        >
          <IconBrandTwitter />
          <p>Share</p>
        </a>
        <script async src="https://platform.twitter.com/widgets.js" />

        <h1>{props.title}</h1>
        <time dateTime={props.publishedAt}>
          {dayjs(props.publishedAt).format("投稿日:YYYY年MM月DD日")}
        </time>
        <div
          dangerouslySetInnerHTML={{ __html: props.body }}
          className={classes.body}
        />
        <Link href="/blog">
          <a className={classes.back}>戻る</a>
        </Link>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blogPage/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export default BlogId;
