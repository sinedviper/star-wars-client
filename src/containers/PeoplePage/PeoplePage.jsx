import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { getApiResource, changeHTTP } from "../../utils/network";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { API_PEOPLE } from "../../constants/api";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation/PeopleNavigation";

//import styles from  './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prePage, setprePage] = useState(null);
  const [nextPage, setnextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setprePage(changeHTTP(res.previous));
      setnextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  });

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prePage={prePage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.proTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
