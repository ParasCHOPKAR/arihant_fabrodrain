"use client";

import { useState, useEffect } from "react";
import styles from "./heroSection.module.css";

export default function HeroSection() {
  const desktopSlides = [
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

  const mobileSlides = [
    "/mobile/1.jpg",
      "/mobile/2.jpg",
        "/mobile/3.jpg",
          "/mobile/4.jpg",
            "/mobile/5.jpg",
              "/mobile/6.jpg",
                "/mobile/7.jpg",
                  "/mobile/8.jpg",
                    "/mobile/9.jpg",
                      "/mobile/10.jpg",
                        "/mobile/11.jpg",
                          "/mobile/12.jpg",

  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile width
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

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
            <a href="product_page" className={styles.primaryBtn}>Explore Products</a>
            <a href="contact" className={styles.secondaryBtn}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
