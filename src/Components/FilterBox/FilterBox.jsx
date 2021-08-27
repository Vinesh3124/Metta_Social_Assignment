import React from 'react'
import InputForm from '../InputForm/InputForm'
import styles from "./FilterBox.module.css"

const FilterBox = () => {
    return (
        <div className={styles.mainContainer}>
           <InputForm />
        </div>
    )
}

export default FilterBox
