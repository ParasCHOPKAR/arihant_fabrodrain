"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_chamber_Page.module.css";

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
Fibrodrain FRP Chambers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
   Fibrodrain recess covers with frame are tested as per BS EN 124, IS1726 & AASHTO M306 standards for drainage and Utility services meeting all requirements of the code. THERMODRAIN Covers are better performing than Cast Iron, Ductile Iron and RCC recess covers.


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
            src="/product_img/pruduct_11.jpg"
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
          <h2>Specifications</h2>
          <ul>
            <li>Made from specially formulated high-strength resin</li>
            <li>UV stabilised for long-lasting performance
</li>
            <li>
Load tested up to 60 Tons – suitable for all traffic conditions
            </li>
            <li>
    Withstands earth vibrations caused by traffic
            </li>
            <li>Tested as per ASTM D 3753 & IS 12592-2008 standards

</li>
          </ul>

          <h2>Key Advantages of Fibrodrain FRP Chambers:</h2>
          <ul>
            <li>100% Corrosion-Free – No rusting, no decay.</li>
            <li>Easy Installation – Just dig, concrete the base and fix.</li>
            <li> Leak-Proof Design – Ensures safe and clean operation</li>
            <li>Relocatable – Can be shifted when required.</li>
            <li>All Sizes Available – Wide range to suit different needs.</li>
            
            <li>Multi-Purpose – Also usable as inspection chamb.</li>
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
