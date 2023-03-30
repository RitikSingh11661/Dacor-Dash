import React from 'react'
import styles from "./Stepper.module.css";

const Stepper = () => {
  return (
    <div className={styles.main}>
      <div>1. Cart</div>
      <span>&#10095;</span>
      <div>2. Address</div>
      <span>&#10095;</span>
      <div>3. Payment</div>
    </div>
  );
}

export default Stepper