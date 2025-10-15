"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_water_Page.module.css";

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
THERMODRAIN WATER GULLY COVERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
THERMODRAIN Water Gully Covers are tested as per BS EN 124, IS1726 & AASHTO M306 standards for drainage and Utility services meeting all requirements of the code. THERMODRAIN Water Gully Covers are better performing than Cast Iron, Ductile Iron and RCC manhole covers.
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
            src="/product_img/pruduct_06.jpg"
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
            <li>Permanent set is as per BSEN 124 for all sizes and load bearing</li>
            <li>Self pigmented, non-painted</li>
            <li>
            Minimum opening is more than 30% of clear opening size for smooth flow of water
            </li>
         
          </ul>

          <h2>Key Highlights</h2>
          <ul>
            <li>Material: FRP / GRP / Composite Material</li>
            <li>Load Bearing Capacity: 2.5T (2.5 Tons) to F900 (90 Tons)</li>
            <li>Sizes : Available in all standard sizes</li>
        
         
          </ul>

           <h2>Areas of Application :</h2>
          <ul>
            <li>Storm water drain trenches</li>
            <li>Basement Car Park</li>
            <li>Podiums</li>
             <li>Industrial plants</li>
          </ul>

          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05 }}>
              Get a Quote
            </motion.button>
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
