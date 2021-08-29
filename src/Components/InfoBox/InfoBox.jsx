import React from 'react'
import FlightCard from '../FlightCards/FlightCard'
import styles from "./InfoBox.module.css"

const InfoBox = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.flightInfoBanner}>
                <div className={styles.flightInfoBanner_destination}>
                    <h2>{`PUNE > DELHI > PUNE`}</h2>
                </div>
                <div className={styles.flightInfoBanner_date}>
                    <p>Depart: 1st Jun 2012</p>
                    <p>Return: 1st Jun 2012</p>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <FlightCard />
                {/* <FlightCard />
                <FlightCard />
                <FlightCard /> */}
            </div>
        </div>
    )
}

export default InfoBox
