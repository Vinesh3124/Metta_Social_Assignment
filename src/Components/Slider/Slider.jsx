import React,{useState,useEffect} from "react";
import styles from "./Slider.module.css";

export default function Slider() {
  const [value,onChange]=useState(1500);

  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })


  const handleChange = (e) => {
    if(e.target.value === ""){
      onChange(1500)
    }
    onChange(e.target.value)
  }

  return (
    <div className={styles.slider_parent}>
      <input className={styles.slider_parent_slide} type="range" min="1500" max="50000" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      {/* <div className={styles.buble}> 
      {value}
      </div> */}
      <input type="number" placeholder={value} onChange={handleChange}/>
    </div>
  );
}