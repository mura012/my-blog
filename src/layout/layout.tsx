import Head from "next/head";
import React, { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import classes from "./layout.module.css";

type Props = {
  children: ReactNode;
  title?: String;
};

export const Layout = ({ children, title = "mura-mostlove" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={classes.wrapper}>{children}</div>
      <Footer />
    </>
  );
};
