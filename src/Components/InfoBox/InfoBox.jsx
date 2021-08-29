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
              {flightData?.one_way ? (
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
            {(flightData?.end_date !== "undefined/undefined/undefined") && <p>{`Return: ${flightData?.e_str_date}`}</p>}
          </>}
        </div>
      </div>
      <div className={styles.cardContainer}>
        {data?.map(el => <FlightCard key={el.id}  el={el} flightData={flightData}/>)}
      </div>
    </div>
  );
};

export default InfoBox;
