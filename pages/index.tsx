import React from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import useStore from "../store/zustand";
import { Action } from "../types";

const Intro: NextPage<{ actions: Action[] }> = ({ actions }) => {
  const store = useStore();
  const onLoad = () => {
    store.load(actions);
    store.setTotalPoint();
  };
  return (
    <div className={styles.introContainer}>
      <Head>
        <title>Test Case APP</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/logo.svg" height={56} width={233} alt={"logo"} />
        </div>
        <div className={styles.cover}>
          <Image src="/coverImg.svg" height={272} width={300} alt={"logo"} />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <div className={styles.title}>Welcome to the TestCase APP!</div>
            <div className={styles.description}>
              We created this exercise to gain insights about your development
              skills.
            </div>
            <Link href="/home">
              <button className={styles.button} onClick={onLoad}>
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://cdn.mallconomy.com/testcase/actions.json");
  const results: Action[] = await res.json();
  return {
    props: {
      actions: results,
    },
  };
};

export default Intro;
