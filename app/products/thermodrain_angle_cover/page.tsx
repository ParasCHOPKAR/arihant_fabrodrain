"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_angle_Page.module.css";

export default function ThermodrainProductPage() {
  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
THERMODRAIN L ANGLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
     
        </motion.p>
      </section>

      {/* MAIN CONTENT */}
      <div className={styles.mainContent}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.imageWrapper}
        >
          <Image
            src="/product_img/pruduct_09.jpg"
            alt="Thermodrain Solid Top Manhole Cover"
            width={600}
            height={600}
            className={styles.productImage}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.details}
        >
        
          <h2>Key Highlights</h2>
          <ul>
            <li> Corrosion resistance</li>
            <li>Self Pigmented, no painting required</li>
            <li> Chemical resistance</li>
            <li>Non-conductivity (thermally and electrically)</li>
            <li>
           Having non-magnetic electromagnetic transparency Being
            </li>
            <li>  Lightweight</li>
            <li> High-strength & durability</li>
            <li> Impact resistant</li>
                  <li>   Dimensional stability</li>
            <li>A long life cycle</li>
            <li>  Low-maintenance</li>
          </ul>

          <Link href="/contact">
              {/* <motion.button whileHover={{ scale: 1.05 }}>
              Get a Quote
            </motion.button> */}
          </Link>
        </motion.div>
      </div>

      {/* SPECIFICATIONS TABLE */}


      {/* CTA SECTION */}
      <section className={styles.cta}>
        <h2>Need THERMODRAIN Covers for Your Project?</h2>
        <p>
          Contact us today for bulk inquiries, customization options, or detailed
          technical data sheets. We’re here to help you choose the right product
          for your application.
        </p>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}
