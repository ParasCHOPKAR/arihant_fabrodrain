"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_multi_Page.module.css";

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
         FIBRODRAIN MULTIPLE COVERS WITH FRAME
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
FIBRODRAIN  Multiple Covers with Frame are tested as per BS EN 124, IS1726 & AASHTO M306 standards for drainage and Utility services meeting all requirements of the code. Covers are better performing than Cast Iron, Ductile Iron and RCC manhole covers.
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
            src="/fibro_image/multi_cover.jpg"
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
          <h2>Salient Features</h2>
          <ul>
            <li>Double Sealed Arrangement</li>
            <li>Q-Turn Locking or Bolt Locking Available</li>
            <li>
              Closed Bottom Keyhole prevents mosquito breeding and emission of foul smell
            </li>
            <li>
              Permanent set is as per BS EN 124 for all sizes and load bearing
            </li>
            <li>Self-Pigmented and Non-Brittle Construction</li>
          </ul>

          <h2>Key Highlights</h2>
          <ul>
            <li>Material: FRP / GRP / Composite Material</li>
            <li>Load Bearing Capacity: 2.5T (2.5 Tons) to F900 (90 Tons)</li>
            <li>Shapes: Circular, Square and Rectangular</li>
            <li>Seal: Double Seal Arrangements</li>
            <li>
              Closed Bottom Keyholes with Stainless Steel or High-Strength Plastic Alloy
              Inserts (Prevents Cracking)
            </li>
          </ul>

          <Link href="/contact">
              {/* <motion.button whileHover={{ scale: 1.05 }}>
              Get a Quote
            </motion.button> */}
          </Link>
        </motion.div>
      </div>



      {/* CTA SECTION */}
      <section className={styles.cta}>
   <h2>Need FIBRODRAIN Covers for Your Project?</h2>
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
