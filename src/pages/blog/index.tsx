import Link from "next/link";
import classes from "./blog.module.css";
import { client } from "src/lib/client";
import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps } from "react";
import { Loading } from "src/components/Loading";
import { Layout } from "src/layout";
import Image from "next/image";

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    setLoading(true);
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
    setLoading(false);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <Layout title="ブログ">
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
        <p>{`${
          loading ? "検索中" : search ? "検索結果" : "記事の総数"
        }: ${totalCount}件`}</p>
        {loading ? (
          <Loading />
        ) : (
          <ul>
            {contents.map((content) => {
              return (
                <li key={content.id} className={classes.linkWrapper}>
                  <Link
                    href={`/blogPage/${content.id}`}
                    style={{ backgroundColor: "red" }}
                  >
                    <a className={classes.linkAnchor}>
                      <Image
                        src={content.image.url}
                        alt="画像"
                        className={classes.linkImage}
                        width={160}
                        height={120}
                      />
                      {content.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </Layout>
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
