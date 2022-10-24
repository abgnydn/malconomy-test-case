import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import useStore from "../store/zustand";
import Link from "next/link";
const Header = () => {
  const store = useStore();

  return (
    <div className={styles.header}>
      <Link href={"/home"}>
      <div className={styles.logo}>
          <Image src="/logo2.svg" height={50} width={130} alt={"logo"} />
        </div>
        </Link>
      <div className={styles.points}>Points: {store.totalPoint}<span className={styles.point}></span></div>
    </div>
  );
};

export default Header;
