import React from "react";
import styles from "./NotFoundPage.module.css";
import img from "./img/not-found.png";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img src={img} alt="Not found" className={styles.img} />
      <p className={styles.text}>No match for {location.pathname}</p>
    </>
  );
};

export default NotFoundPage;
