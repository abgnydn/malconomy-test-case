import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { Action } from "../types";

const CompletedActionCard = ({ action }: Action | any) => {
  return (
    <div className={styles.card}>
        <div className={styles.title}>{action.title}</div>
      <div className={styles.point}>+{action.point}</div>
    </div>
  );
};

export default CompletedActionCard;
