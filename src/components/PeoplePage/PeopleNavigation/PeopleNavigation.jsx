import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PeopleNavigation.module.css";

import UiButton from "../../UI/UiButton/UiButton";

const PeopleNavigation = ({ getResource, prePage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePre = () => getResource(prePage);
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UiButton
          text="Previous"
          onClick={handleChangePre}
          disabled={!prePage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
          classes={styles.test}
        />
      </Link>
    </div>
  );
};

PeopleNavigation.proTypes = {
  getResourse: PropTypes.func,
  prePage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
