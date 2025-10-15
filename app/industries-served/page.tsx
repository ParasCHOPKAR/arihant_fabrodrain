"use client";
import React from "react";
import styles from "./IndustriesServed.module.css";

const IndustriesServed = () => {
  const industries = [
    "Sewerage Chambers",
    "Storm Water Drain Chambers",
    "Cable Trench Chambers",
    "Gas Valve Chambers",
    "Telecom Chambers",
    "Fuel Chambers",
  ];

  const projects = [
    "Residential",
    "Commercial",
    "Road Infrastructure",
    "Airport",
    "Industrial",
    "Warehousing",
    "Fuel Station",
  ];

  return (
    <section className={styles.industriesPage}>
      <div className={styles.industriesHero}>
        <h1>Industries We Serve</h1>
        <p>
          Delivering reliable chamber and infrastructure solutions across
          multiple sectors with quality, innovation, and trust.
        </p>
      </div>

      <div className={styles.industriesContainer}>
        <div className={styles.sectionBox}>
          <h2>Types of Chambers</h2>
          <div className={styles.gridList}>
            {industries.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionBox}>
          <h2>Types of Projects</h2>
          <div className={styles.gridList}>
            {projects.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
