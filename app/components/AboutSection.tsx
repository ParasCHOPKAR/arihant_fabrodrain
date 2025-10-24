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
          At <b>FibroDrain</b>, we specialize in designing and manufacturing <b>FRP (Fiber Reinforced Polymer)</b> drainage solutions built for strength, durability, and sustainability. With decades of expertise, we deliver high-performance FRP manhole covers, water gully covers, and customized drainage products that meet international standards of quality and safety.
        </p>

        <p className={styles.aboutText}>
          Our mission is to provide lightweight, rust-proof, load-bearing alternatives to traditional drainage covers, offering industries, builders, and infrastructure projects long-lasting and cost-effective solutions.
        </p>

        <p className={styles.aboutText}>
          Trusted by engineers, architects, and contractors, FibroDrain products are tested, certified, and crafted for modern urban needs—from residential and commercial spaces to large-scale industrial and municipal projects.
        </p>

        <div className={styles.aboutHighlight}>
          <span className={styles.highlightIcon}>★</span>
          <span className={styles.highlightText}>Trusted by Professionals Nationwide</span>
        </div>

        <Link href="/about" className={styles.aboutBtnLink}>
          <button className={styles.aboutBtn}>→ Learn more</button>
        </Link>
      </div>

      {/* Right Image + Stats */}
      <div className={styles.aboutRight}>
        <div className={styles.imageWrapper}>
          <Image
            src="/gallery/about_02.jpg"
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
            We ensure quality assurance and long-lasting products that exceed customer expectations across every project.
          </p>
        </div>

        {/* Experience Box */}
{/* FibroDrain Overview Box */}
<div className={`${styles.aboutBox} ${styles.expBox}`}>
  <h3>
    <span className={styles.count}>FibroDrain</span>
  </h3>

  <p className={styles.boxDesc}>
    We specialize in designing and manufacturing <b>FRP (Fiber Reinforced Polymer)</b> drainage solutions — including manhole covers etc.
  </p>

</div>

      </div>
    </section>
  );
}
