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
    }, 5000);
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
        <div className={styles.leftContent}>

     
          <div className={styles.buttons}>
            <a href="#products" className={styles.primaryBtn}>Explore Products</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
