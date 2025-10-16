"use client";

import { useState, useEffect } from "react";
import styles from "./heroSection.module.css";

export default function HeroSection() {
  const slides = [
    "/product_img/1.jpg",
    "/product_img/2.jpg",
    "/product_img/3.jpg",
    "/product_img/4.jpg",
    "/product_img/5.jpg",
    "/product_img/6.jpg",
    "/product_img/7.jpg",
    "/product_img/8.jpg",
    "/product_img/9.jpg",
    "/product_img/11.jpg",
    "/product_img/10.jpg",
    "/product_img/12.jpg",
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
