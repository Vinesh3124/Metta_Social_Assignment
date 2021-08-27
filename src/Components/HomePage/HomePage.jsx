import React from 'react'
import FilterBox from '../FilterBox/FilterBox'
import InfoBox from '../InfoBox/InfoBox'
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <>
        <h2 className={styles.heading}>Flight Search Engine</h2>
        <hr />
        <div className={styles.mainContainer}>
            <FilterBox />
            <InfoBox />
        </div>
        </>
    )
}

export default HomePage
