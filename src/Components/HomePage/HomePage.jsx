import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./HomePage.module.css";
import {getSearch} from "../../Redux/Serach/action"
import { useDispatch } from "react-redux";


const HomePage = () => {
  const [flightData, setFlightData] = React.useState();
  const dispatch = useDispatch()

  dispatch(getSearch(flightData))

  return (
    <>
      <h2 className={styles.heading}>Flight Search Engine</h2>
      <hr />
      <div className={styles.mainContainer}>
        <FilterBox setFlightData={setFlightData} />
        <InfoBox flightData={flightData} />
      </div>
    </>
  );
};

export default HomePage;
