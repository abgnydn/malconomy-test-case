import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const ActionCard = ({ action }: any) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardLeft}>
        <div className={styles.image}>
        <Image
          src={action.image}
          alt={action.description}
            width= {36}
            height={36}
        />      
        </div>
      <div className={styles.text}>
        <div className={styles.title}>{action.title}</div>
        <div className={styles.description}>{action.description}</div>
      </div>
      </div>
      <div className={styles.point}>+{action.point}</div>
    </div>
  );
};

export default ActionCard;
