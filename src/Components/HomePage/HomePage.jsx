import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./HomePage.module.css";
import { getSearch, getReturnSearch } from "../../Redux/Serach/action";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const flightData = useSelector((state) => state.filter.data);
  const dispatch = useDispatch();
  dispatch(getSearch(flightData));
  if (flightData?.returnway) {
    dispatch(getReturnSearch(flightData));
  }
  return (
    <>
      <h2 className={styles.heading}>Flight Search Engine</h2>
      <hr />
      <div className={styles.mainContainer}>
        <FilterBox />
        <InfoBox flightData={flightData} />
      </div>
    </>
  );
};

export default HomePage;
