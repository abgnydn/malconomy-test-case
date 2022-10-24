import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import useStore from "../../../store/zustand";
import { NextPage } from "next";

const View:NextPage = (() => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const index = Number(id) - 1;
  const store = useStore();
  const action = store.actions[index];


  const onClick = () => {
    store.completeAction(index);
    store.getCompletedActions();
    store.setTotalPoint();
  }
  return (
    
    <Layout className={styles.header}>
      <div className={styles.viewContainer}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={action.image} alt={"image"} width={72} height={72}/> 
          </div>
          <div className={styles.point}>
            +{action.point} Points
          </div>
          <div className={styles.title}>
            {action.title}
          </div>
          <div className={styles.description}>
            {action.description}
          </div>
          <Link href={{pathname: "/action/congratulations", query:{id: action.id},}} key={action.id}> 
            <button className={styles.button} onClick={onClick}>Earn points</button>
          </Link>

        </div>
      </div>
    </Layout>
  );
});

export default View;
