import PropTypes from "prop-types";
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading/UiLoading";
import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constants/api";
import { getPeopleImage } from "../../services/getPeopleData";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(null);
  const { id } = useParams();

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  });

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="white" isShadow="" />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.proTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
