import React from 'react'
import FlightCard from '../FlightCards/FlightCard'
import styles from "./InfoBox.module.css"

const InfoBox = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.flightInfoBanner}></div>
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
