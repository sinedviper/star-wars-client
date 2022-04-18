import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite/Favorite";

import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";

import imgDroid from "./img/droid.svg";
import imgLightSaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
