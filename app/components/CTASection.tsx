"use client";

import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <div className={styles.wrapper}>
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.overlay}></div>
        <div className={styles.ctaContent}>
          <h2>Let’s Build Something Amazing Together</h2>
          <p>Have a project in mind? Reach out and let’s make it happen.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get In Touch
          </Link>
        </div>
      </section>

  
    </div>
  );
}
