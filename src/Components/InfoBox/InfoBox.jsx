import React from "react";
import { useSelector } from "react-redux";
import FlightCard from "../FlightCards/FlightCard";
import styles from "./InfoBox.module.css";

const InfoBox = ({ flightData }) => {
  const data = useSelector(state=>state.search.data)
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.flightInfoBanner}>
        <div className={styles.flightInfoBanner_destination}>
          {flightData?.origin_city === undefined || flightData?.origin_city === "" ? (
            <h2>Select Origin and Destination City</h2>
          ) : (
            <>
              {" "}
              {flightData?.end_date ? (
                <h2>{`${flightData?.origin_city} > ${flightData?.dest_city} > ${flightData?.origin_city}`}</h2>
              ) : (
                <h2>{`${flightData?.origin_city} > ${flightData?.dest_city}`}</h2>
              )}
            </>
          )}
        </div>
        <div className={styles.flightInfoBanner_date}>
          {flightData?.start_date  && 
          <>
            <p>{`Depart: ${flightData?.string_date}`}</p>
            {flightData?.end_date && <p>{`Return: ${flightData?.string_date}`}</p>}
          </>}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <FlightCard />
      </div>
    </div>
  );
};

export default InfoBox;
