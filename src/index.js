import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import ThemeProvider from "./context/ThemeProvider";
import store from "./store/store";
import App from "./containers/App";

import "./styles/index.css";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
