"use client";

import { useState, useEffect } from "react";
import styles from "./heroSection.module.css";

export default function HeroSection() {
  const slides = [
    "/images/pr.jpg",
    "/images/pr_1.jpg",
    "/images/pr_2.jpg",
    "/images/pr_3.jpg",
    "/images/pr_4.jpg",
    "/images/pr_5.jpg",
    "/images/pr_6.jpg",
    "/images/pr_7.jpg",
    "/images/pr_8.jpg",
    "/images/pr_9.jpg",
    "/images/pr_10.jpg",
    "/images/pr_11.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      {slides.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          {/* <h1>High-Quality Industrial Products & Solutions</h1>
          <p>
            Empowering industries with durable, efficient, and innovative
            products designed to meet the most demanding standards.
          </p> */}
          <div className={styles.buttons}></div>
        </div>
      </div>
    </section>
  );
}
