import React from "react";
import { useNavigate } from "react-router-dom";
import iconBack from "./img/back.svg";
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const history = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    history(-1);
  };

  return (
    <a href="/#" onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} alt="GoBack" className={styles.link__img} />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
