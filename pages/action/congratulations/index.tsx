import React from 'react'
import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import useStore from '../../../store/zustand';

const Congratulations = () => {
  const store = useStore();
  const router = useRouter();
  const {
    query: { id },
  } = router
  const index = Number(id) - 1;



  return (
    
    <Layout className={styles.header}>
      <div className={styles.viewContainer}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={"/tick.svg"} alt="tick" width={72} height={72}/> 
          </div>
          <div className={styles.point}>
          </div>
          <div className={styles.title}>
          Congratulations!
          </div>
          <div className={styles.description}>
          You&apos;ve earned points for your participation! <br/> Keep Up the great work!</div>
          <Link href={"/my-points"} key={null}> 
            <button className={styles.button}>Close</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Congratulations