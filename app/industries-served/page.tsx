"use client";
import React from "react";
import Image from "next/image";
import styles from "./IndustriesServed.module.css";

const IndustriesServed = () => {
  const industries = [
    { name: "Sewerage Chambers", img: "/indus_serv/Sewerage_Chambers.jpg" },
    { name: "Storm Water Drain Chambers", img: "/indus_serv/Storm_Water.jpg" },
    { name: "Cable Trench Chambers", img: "/indus_serv/Cable_Trench_Chambers.jpeg" },
    { name: "Gas Valve Chambers", img: "/indus_serv/Gas_Valve_Chambers.jpeg" },
    { name: "Telecom Chambers", img: "/indus_serv/Telecom_Chambers.jpeg" },
    { name: "Fuel Chambers", img: "/indus_serv/Fuel_Chambers.jpeg" },
  ];

  const projects = [
    { name: "Residential", img: "/indus_serv/Residential.webp" },
    { name: "Commercial", img: "/indus_serv/Commercial.jpeg" },
    { name: "Road Infrastructure", img: "/indus_serv/Road_Infrastructure.jpg" },
    { name: "Airport", img: "/indus_serv/Airport.jpeg" },
    { name: "Industrial", img: "/indus_serv/Industrial.jpeg" },
    { name: "Warehousing", img: "/indus_serv/Warehousing.jpg" },
    { name: "Fuel Station", img: "/indus_serv/Fuel_Station.jpg" },
  ];

  return (
    <section className={styles.industriesPage}>
      {/* HERO SECTION */}
      <div className={styles.industriesHero}>
        <h1>Industries We Serve</h1>
        <p>
          Delivering reliable chamber and infrastructure solutions across
          multiple sectors with quality, innovation and trust.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.industriesContainer}>
        {/* INDUSTRIES SECTION */}
        <div className={styles.sectionBox}>
          <h2>Types of Chambers</h2>
          <div className={styles.gridList}>
            {industries.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.iconImg}
                  />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className={styles.sectionBox}>
          <h2>Types of Projects</h2>
          <div className={styles.gridList}>
            {projects.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.iconImg}
                  />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
