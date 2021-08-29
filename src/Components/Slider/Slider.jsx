import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

export default function Slider({ setPrice, price }) {
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(price / 4)}px`;
    }
  });

  const handleChange = (e) => {
    if (e.target.value === "") {
      setPrice(1500);
    }
    setPrice(e.target.value);
  };

  return (
    <div className={styles.slider_parent}>
      <input
        className={styles.slider_parent_slide}
        type="range"
        min="1500"
        max="50000"
        value={price}
        onChange={({ target: { value: radius } }) => {
          setPrice(radius);
        }}
      />
      <input type="number" placeholder={price} onChange={handleChange} />
    </div>
  );
}
