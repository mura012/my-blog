import Link from "next/link";
import classes from "src/styles/Home.module.css";
import { client } from "src/lib/client";
import { Header } from "src/components/Header";

const Blog = (props) => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <p>{`記事の総数: ${props.totalCount}件`}</p>
        <ul>
          {props.contents.map((content) => {
            return (
              <li key={content.id} className={classes.linkWrapper}>
                <Link href={`/blog/${content.id}`} className={classes.link}>
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

export const getStaticProps = async (ctx) => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default Blog;
