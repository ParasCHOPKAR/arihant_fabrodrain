"use client";

import { useState, useEffect } from "react";
import styles from "./loader.module.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); // start shutter animation
      setTimeout(() => setLoading(false), 1000); // remove loader after shutter
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderOverlay} ${hide ? styles.loaderHide : ""}`}>
      <div className={styles.loaderContent}>
        <img src="/images/logo_2.png" alt="Fibrodrain Logo" className={styles.logo} />
        <p className={styles.description}>
          At Fibrodrain, we take pride in housing one of the largest load testing machines,
          a true testament to our commitment to engineering excellence.<br /><br />
          We deliver a wide range of FRP drainage solutions designed with unmatched strength,
          durability, and load-bearing capacity, all tested to meet international standards.
        </p>
        <ul className={styles.features}>
          <li>🔹 High-Tech Composite Development</li>
          <li>🔹 Sustainable Product Integration</li>
          <li>🔹 Lasting Quality Commitment</li>
          <li>🔹 Tailored Drainage Solutions</li>
        </ul>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}
