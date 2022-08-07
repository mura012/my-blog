import Link from "next/link";
import classes from "./blog.module.css";
import { client } from "src/lib/client";
import { Header } from "src/components/Header";
import { useState } from "react";
import { Footer } from "src/components/Footer/Footer";
import Head from "next/head";

const Blog = (props) => {
  const [search, setSearch] = useState();

  const handleSubmit = async (event) => {
    // イベントのデフォルトの挙動をキャンセル
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    json.contents != 0 ? setSearch(json) : alert("検索結果がありません");
  };

  const handleClick = () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <>
      <Head>
        <title>myblog</title>
      </Head>
      <Header />
      <main className={classes.wrapper}>
        <form onSubmit={handleSubmit} className={classes.submit}>
          <input type="text" name="query" placeholder="検索" />
          <button>検索</button>
          <button type="reset" onClick={handleClick}>
            リセット
          </button>
        </form>
        <p className={classes.total}>{`${
          search ? "検索結果" : "記事の総数"
        }: ${totalCount}件`}</p>
        <ul>
          {contents.map((content) => {
            return (
              <li key={content.id} className={classes.linkWrapper}>
                <Link href={`/blogPage/${content.id}`} className={classes.link}>
                  <a className={classes.linkAnchor}>
                    <img
                      src={content.image.url}
                      alt="画像"
                      className={classes.linkImage}
                    />
                    {content.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default Blog;
