import React, { useEffect } from "react";
import Head from "next/head";
import ActionCard from "../../components/ActionCard";
import styles from "../../styles/Home.module.scss";
import { GetStaticProps, NextPage } from "next";
import { Action } from "../../types";
import Layout from "../../components/Layout";
import Link from "next/link";
import useStore from "../../store/zustand";

const Home: NextPage = () => {
  const store = useStore();
  
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <Head>
          <title>Test Case APP</title>
        </Head>

        <div className={styles.actionWrapper}>
          <div className={styles.title}>Actions to be completed</div>
          {store.actions
            .filter((action) => action.completed == null)
            .map((action) => {
              return (
                <Link
                  href={{ pathname: "/action/view", query: { id: action.id } }}
                  key={action.id}
                >
                  <a>
                    <ActionCard action={action} />
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
