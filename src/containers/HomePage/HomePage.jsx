import React from "react";
import PropTypes from "prop-types";

import ChooseSide from "../../components/HomePage/ChooseSide/";
//import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="header__text">HOME</h1>
        <ChooseSide />
      </div>
    </>
  );
};

HomePage.proTypes = {
  test: PropTypes.string,
};

export default HomePage;
