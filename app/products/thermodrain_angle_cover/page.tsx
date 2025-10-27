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
FIBRODRAIN L ANGLE
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
        
          <h2>Key Advantages of Fibrodrain FRP/GRP L Angles</h2>
          <ul>
            <li>Corrosion Resistant – Does not rust or decay, even in harsh conditions</li>
            <li>No Painting Needed – Self-pigmented for long-lasting finish.</li>
            <li>Chemical Resistant – Performs well in aggressive environments.</li>
            <li>Non-Conductive – Safe from thermal and electrical conductivity.</li>
            <li>Non-Magnetic – Offers electromagnetic transparency.</li>
            <li> Lightweight & Strong – Easy to handle without compromising
strength.</li>
            <li>Durable & Impact Resistant – Withstands heavy usage and
pressure.
</li>
            <li>Dimensionally Stable – Maintains shape without warping.
</li>
                  <li>   Dimensional stability</li>
            <li>Long Life Cycle – Designed for long-term performance.</li>
            <li> Low Maintenance – Minimal upkeep required.</li>
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
