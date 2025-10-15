"use client";

import styles from "./aboutSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      {/* Left Content */}
      <div className={styles.aboutLeft}>
        <span className={styles.aboutTag}>About Us</span>

        <h2 className={styles.aboutTitle}>FibroDrain</h2>

        <p className={styles.aboutText}>
          Established in the year XXXX at Pune, Maharashtra,{" "}
          <b>FibroDrain</b> is a leading manufacturer and supplier of
          high-quality <b>FRP, RCC, and Polymer Concrete Drain Covers</b>,
          Chamber Covers, and other Precast Infrastructure Products.
        </p>

        <p className={styles.aboutText}>
          Our products are designed for superior strength, long life, and
          sustainability. Using advanced technology and precision moulding
          techniques, we ensure durability, corrosion resistance, and load-bearing
          performance that meets industry standards.
        </p>

        <p className={styles.aboutText}>
          At FibroDrain, we take pride in delivering customized drainage
          solutions for residential, commercial, and industrial applications.
          Our focus on <b>quality, innovation, and timely delivery</b> has earned
          us a strong reputation and a loyal client base across India.
        </p>

        <div className={styles.aboutHighlight}>
          <span className={styles.highlightIcon}>★</span>
          <span className={styles.highlightText}>Trusted Since XXXX</span>
        </div>

        <Link href="/about" className={styles.aboutBtnLink}>
          <button className={styles.aboutBtn}>→ Learn more</button>
        </Link>
      </div>

      {/* Right Image + Stats */}
      <div className={styles.aboutRight}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/about__011.jpg"
            alt="FibroDrain"
            width={500}
            height={500}
            className={styles.aboutImage}
          />
        </div>

        {/* Success Box */}
        <div className={`${styles.aboutBox} ${styles.successBox}`}>
          <h3>
            <span className={styles.count}>98%</span>
          </h3>
          <p className={styles.boxTitle}>Client Satisfaction</p>
          <p className={styles.boxDesc}>
            We ensure quality assurance and long-lasting products that exceed
            customer expectations across every project.
          </p>
        </div>

        {/* Experience Box */}
        <div className={`${styles.aboutBox} ${styles.expBox}`}>
          <h3>
            <span className={styles.count}>10+</span>
          </h3>
          <p className={styles.boxTitle}>Years of Expertise</p>
          <p className={styles.boxDesc}>
            Delivering strong, reliable, and sustainable drainage solutions since
            xxxx — trusted by clients nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}
