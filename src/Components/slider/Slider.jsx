import { useEffect, useState } from "react";
import veg1 from "../../Images/veg1.jpg";
import veg2 from "../../Images/veg2.jpg";
import veg3 from "../../Images/veg3.jpg";
import veg4 from "../../Images/veg4.jpg";
import veg5 from "../../Images/veg5.jpg";
import styles from "./Slider.module.css";

function Slider() {
 
  useEffect(() => {
    let interval = setInterval(sliding, 1500);

    return () => clearInterval(interval);
  });


  const sliding = () => {
    let slider = document.getElementById("slider");

    let left = slider.firstElementChild;
    console.log(left)

    if(!left)return

    left.style.width=0
    left.style.margin=0

    setTimeout(()=>{

      slider.removeChild(left);
      slider.appendChild(left);
      left.style.width='250px'
      left.style.margin='0 10px'
      
    },500)
  };
 
  return (
    <div className={styles.slider} id="slider">
        <img src={veg1} className={styles.image} alt="" />
        <img src={veg2} className={styles.image} alt="" />
        <img src={veg3} className={styles.image} alt="" />
        <img src={veg4} className={styles.image} alt="" />
        <img src={veg5} className={styles.image} alt="" />
    </div>
  );
}

export default Slider;
