import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../../context/ThemeProvider";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img src={img} alt={text} className={styles.item__img} />
    </div>
  );
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light side",
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark side",
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item__neitral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }) => {
        return (
          <ChooseSideItem
            key={theme}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        );
      })}
    </div>
  );
};

ChooseSideItem.proTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

export default ChooseSide;
