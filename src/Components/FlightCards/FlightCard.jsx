import React from 'react'
import styles from "./FlightCard.module.css"

const FlightCard = ({el, flightData}) => {
    console.log(el)
    console.log(flightData.one_way)
    return (
        <div className={styles.card}>
            <div className={styles.infoBox}>
                <div className={styles.infoBox_amount}>
                    <span>{!flightData.one_way ? `RS. ${(el.Price * flightData.passengers)}` : `RS. ${(el.Price * flightData.passengers)*2}`}</span>
                </div>
                <div className={styles.infoBox_bookDetails}>
                    <div className={styles.infoBox_bookDetails_left}>
                        <p>{el.Plane_code}</p>
                        <p>{`${el.City_Code_Origin} > ${el.City_Code_Destination}`}</p>
                        <p>{`Depart: ${el.Departure_Time}`}</p>
                        <p>{`Arrive: ${el.Arrival_Time}`}</p>
                    </div>
                   {flightData.one_way && <div className={styles.infoBox_bookDetails_right}>
                        <p>{el.Plane_code}</p>
                        <p>{`${el.City_Code_Destination} > ${el.City_Code_Origin}`}</p>
                        <p>{`Depart: ${el.Arrival_Time}`}</p>
                        <p>{`Arrive: ${el.Departure_Time}`}</p>
                    </div>}
                </div>
            </div>
            <div className={styles.btnBox}>
                <div className={styles.btnBox_img}>
                    <img className={styles.img} src={el.Image} alt="flight"/>
                </div>
                <button className={styles.btnBox_btn}>Book this flight</button>
            </div>
        </div>
    )
}

export default FlightCard
