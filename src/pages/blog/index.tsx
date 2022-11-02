import Link from "next/link";
import classes from "./blog.module.css";
import { client } from "src/lib/client";
import { Header } from "src/components/Header";
import { useState } from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps } from "react";

export type Blog = {
  id: string;
  image: {
    url: string;
  };
  title: string;
  body: string;
};

const Blog: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
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

  const handleClick: ComponentProps<"button">["onClick"] = () => {
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
          <input
            type="text"
            name="query"
            placeholder="検索"
            autoComplete="off"
            style={{ outline: "none" }}
          />
          <button>検索</button>
          <button type="reset" onClick={handleClick}>
            リセット
          </button>
        </form>
        <p>{`${search ? "検索結果" : "記事の総数"}: ${totalCount}件`}</p>
        <ul>
          {contents.map((content) => {
            return (
              <li key={content.id} className={classes.linkWrapper}>
                <Link href={`/blogPage/${content.id}`}>
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
    </>
  );
};

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<Blog>
> = async (ctx) => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default Blog;
