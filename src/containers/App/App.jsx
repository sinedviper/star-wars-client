import routesConfig from "../../routes/routesConfig";
import React from "react";
import Header from "../../components/Header/Header";

import { Routes, Route, BrowserRouter as Routers } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Routers>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </div>
      </Routers>
    </>
  );
};

export default App;
