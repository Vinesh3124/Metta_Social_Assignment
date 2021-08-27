import React from 'react'
import styles from "./FlightCard.module.css"

const FlightCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.infoBox}>
                <div className={styles.infoBox_amount}>
                    <span>RS. 9.500.00</span>
                </div>
                <div className={styles.infoBox_bookDetails}>
                    <div className={styles.infoBox_bookDetails_left}>
                        <p>Al - 202</p>
                        <p>{`PNQ > DEL`}</p>
                        <p>Depart: 10.00 AM</p>
                        <p>Arrive: 12.00 AM</p>
                    </div>
                    <div className={styles.infoBox_bookDetails_right}>
                        <p>Al - 202</p>
                        <p>{`PNQ > DEL`}</p>
                        <p>Depart: 10.00 AM</p>
                        <p>Arrive: 12.00 AM</p>
                    </div>
                </div>
            </div>
            <div className={styles.btnBox}>
                <div className={styles.btnBox_img}></div>
                <button className={styles.btnBox_btn}>Book this flight</button>
            </div>
        </div>
    )
}

export default FlightCard
