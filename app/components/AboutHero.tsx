"use client";
import Image from "next/image";
import styles from "./aboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        {/* Left Image Section */}
        <div className={styles.leftImage}>
          <div className={styles.shapeWrapper}>
            <div className={styles.innerShape}></div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about__011.jpg" // ← replace with your image path
                alt="About Us"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className={styles.rightContent}>
          <h1 className={styles.title}>About <span>Us</span></h1>
          <p className={styles.text}>
            At <strong>Arihant Industries</strong>, we take pride in being a
            trusted name in the field of industrial and construction solutions.
            With years of experience, innovation and excellence, we have built
            a reputation for delivering quality products that stand the test of
            time.
          </p>

          <p className={styles.text}>
            Our mission is to combine technology and craftsmanship to provide
            durable, sustainable and efficient solutions to our clients.
            Whether it’s custom manufacturing, innovative product design, or
            quality assurance — we aim to exceed expectations every step of the
            way.
          </p>
        </div>
      </div>
    </section>
  );
}
