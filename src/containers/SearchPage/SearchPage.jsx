import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import UiInput from "../../components/UI/UiInput";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSerchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const deboumcedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    deboumcedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        value={inputSerchValue}
        handleInputChange={handleInputChange}
        placeholder="Input characters name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.proTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
