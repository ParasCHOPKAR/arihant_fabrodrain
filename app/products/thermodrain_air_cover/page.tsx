"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_air_Page.module.css";

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
         FIBRODRAIN AIR & WATER TIGHT COVERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
      Fibrodrain air and water tight covers are tested as per BS EN 124,
 IS 1726 & AASHTO M306 standards, ensuring top performance for
 drainage and utility services. They provide better durability and
 reliability compared to Cast Iron, Ductile Iron, and RCC covers.
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
            src="/product_img/pruduct_01.jpg"
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
    

          <h2>Key  Features</h2>
          <ul>
            <li>Load bearing capacity: From 2.5 tons up to F900 (90 tons).</li>
            <li>Available in circular, square, and rectangular shapes.</li>
            <li>Double seal design for extra protection.</li>
            <li>Available without bolting for easy use.</li>
            <li>Fitted with replaceable local gaskets in case of damage.</li>
               <li>Ensures no foul smell or water seepage.</li>
          </ul>


          <Link href="/contact"></Link>
        </motion.div>
      </div>

      {/* SPECIFICATIONS TABLE */}
      <section className={styles.specifications}>
        <h2>Frame Opening Sizes</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>Size (mm)</th>
                <th>Circular</th>
                <th>Rectangular</th>
                <th>Square</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>400</td>
                <td>400 mm (16&quot;)</td>
                <td>-</td>
                <td>300 mm × 300 mm (12&quot; × 12&quot;)</td>
              </tr>
              <tr>
                <td>450</td>
                <td>450 mm (17&quot;)</td>
                <td>-</td>
                <td>450 mm × 450 mm (18&quot; × 18&quot;)</td>
              </tr>
              <tr>
                <td>500</td>
                <td>500 mm (20&quot;)</td>
                <td>-</td>
                <td>600 mm × 600 mm (24&quot; × 24&quot;)</td>
              </tr>
              <tr>
                <td>600</td>
                <td>600 mm (24&quot;)</td>
                <td>600 mm × 450 mm (24&quot; × 18&quot;)</td>
                <td>675 mm × 675 mm (27&quot; × 27&quot;)</td>
              </tr>
              <tr>
                <td>690</td>
                <td>690 mm (27&quot;)</td>
                <td>-</td>
                <td>750 mm × 750 mm (29&quot; × 29&quot;)</td>
              </tr>
              <tr>
                <td>762</td>
                <td>762 mm (30&quot;)</td>
                <td>-</td>
                <td>900 mm × 900 mm (36&quot; × 36&quot;)</td>
              </tr>
              <tr>
                <td>900</td>
                <td>900 mm (36&quot;)</td>
                <td>900 mm × 450 mm (36&quot; × 18&quot;)</td>
                <td>1000 mm × 1000 mm (40&quot; × 40&quot;)</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>1000 mm (40&quot;)</td>
                <td>990 mm × 1220 mm (40&quot; × 49&quot;)</td>
                <td>1200 mm × 1200 mm (48&quot; × 48&quot;)</td>
              </tr>
              <tr>
                <td>1400</td>
                <td>1400 mm (55&quot;) (2 covers with single frame)</td>
                <td>-</td>
                <td>1500 mm × 1500 mm (60&quot; × 60&quot;)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
