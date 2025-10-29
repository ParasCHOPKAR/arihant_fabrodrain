"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_Frp_Grp_Page.module.css";

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
          FIBRODRAIN FRP/GRP DRAIN CHANNELS WITH GRATING / GULLY COVER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
    FIBRODRAIN FRP/GRP Drain Channels with Grating / Gully Covers are tested as per BS EN 124, IS 1726, and AASHTO M306 standards for drainage and utility applications, meeting all requirements of the code. These systems offer superior hydraulic efficiency, durability, and corrosion resistance — performing significantly better than conventional Cast Iron, Ductile Iron, and RCC drainage products.
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
            src="/product_img/frp_grp_drain.jpg"
            alt="Thermodrain FRP GRP Drain Channel"
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
          <h2>Key Advantages of Fibrodrain FRP Drain Channels</h2>
          <ul>
            <li>High strength and long-lasting performance</li>
            <li>100% corrosion and rust free</li>
            <li>Lightweight and easy to install</li>
            <li>Load tested up to 90 Tons (F900)</li>
            <li>UV and weather resistant</li>
            <li>Leak-proof and stable design</li>
            <li>Low maintenance, no moss or algae growth</li>
            <li>Eco-friendly and sustainable</li>
            <li>Customizable in sizes and load classes</li>
          </ul>

          <h2>Disadvantages of Cement/Concrete Drain Channels</h2>
          <ul>
            <li>Heavy weight makes handling and installation difficult.</li>
            <li>Prone to cracking and breakage under heavy load or vibrations.</li>
            <li>Susceptible to corrosion and chemical damage over time.</li>
            <li>Allows moss, algae, and bacterial growth.</li>
            <li>Higher maintenance and frequent replacement needed.</li>
            <li>Limited design flexibility and customization.</li>
            <li>Shorter lifespan compared to FRP/GRP alternatives.</li>
          </ul>

          <Link href="/contact"></Link>
        </motion.div>
      </div>

      {/* SPECIFICATIONS SECTION */}
      <section className={styles.specifications}>
        <h2>OUT TO OUT DRAIN CHANNEL SIZE</h2>

        <div className={styles.tableWrapper}>
          <motion.table
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.specTable}
          >
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Size (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>120 × 60</td>
              </tr>
              <tr>
                <td>2</td>
                <td>170 × 120</td>
              </tr>
              <tr>
                <td>3</td>
                <td>200 × 200</td>
              </tr>
              <tr>
                <td>4</td>
                <td>310 × 150</td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </section>

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
