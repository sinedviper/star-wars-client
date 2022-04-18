import React from "react";
import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import NotFoundPage from "../containers/NotFoundPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import SearchPage from "../containers/SearchPage/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/people",
    exact: true,
    element: <PeoplePage />,
  },
  {
    path: "/people/:id",
    exact: true,
    element: <PersonPage />,
  },
  {
    path: "/favorites",
    exact: true,
    element: <FavoritesPage />,
  },
  {
    path: "/search",
    exact: true,
    element: <SearchPage />,
  },
  {
    path: "/fail",
    exact: true,
    element: <ErrorMessage />,
  },
  {
    path: "/not-found",
    exact: true,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFoundPage />,
  },
];

export default routesConfig;
