import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import useStore from "../../store/zustand";
import CompletedActionCard from "../../components/CompletedActionCard";
const MyPoints = () => {
  const store = useStore();

  return (
    <Layout>
      <div className={styles.myPointsContainer}>
        <Head>
          <title>Test Case APP</title>
        </Head>

        <div className={styles.wrapper}>
          <div className={styles.title}>Completed Actions</div>
          {store.completedActions.map((action) => {
            return <CompletedActionCard key={action.id} action={action} />;
          })}
        </div>
      </div>
      )
    </Layout>
  );
};

export default MyPoints;
