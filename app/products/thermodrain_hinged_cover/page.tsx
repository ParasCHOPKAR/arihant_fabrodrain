"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_hinged_Page.module.css";

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
Hinged Overhead and u.g. Water Tank Covers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
FIBRODRAIN Water Tank Covers are tested as per BS EN 124.THERMODRAIN Water Tank Covers are better performing than Cast Iron, Ductile Iron and RCC manhole covers.


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
            src="/product_img/pruduct_10.jpg"
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
            <li> Immune to algae, moss and rusting contaminants</li>
            <li>Covers have a provision for gasket fitting</li>
            <li>
         Self pigmented, Non painted</li>
            <li>
            500 kg rated covers have a provision for locking as a standard feature
            </li>
            <li> Comes with a double FRP hinge, with 270 degree opening.</li>
          </ul>

          <h2>Key Highlights</h2>
          <ul>
            <li>Load Bearing : 500 kgs for Overhead Application 500 kgs - 60 Tons (E600) for Underground applications</li>
            <li> Shapes : Circular, square and rectangular shapes available</li>
            <li> Seal : Single seal and Double seal arrangements</li>
            <li> Material : FRP / GRP / Composite material</li>
        
          </ul>

          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05 }}>
              Get a Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* SPECIFICATIONS TABLE */}
{/* <section className={styles.specifications}>
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
          <td>400 mm (16")</td>
          <td>-</td>
          <td>300 mm × 300 mm (12" × 12")</td>
        </tr>
        <tr>
          <td>450</td>
          <td>450 mm (17")</td>
          <td>-</td>
          <td>450 mm × 450 mm (18" × 18")</td>
        </tr>
        <tr>
          <td>500</td>
          <td>500 mm (20")</td>
          <td>-</td>
          <td>600 mm × 600 mm (24" × 24")</td>
        </tr>
        <tr>
          <td>600</td>
          <td>600 mm (24")</td>
          <td>600 mm × 450 mm (24" × 18")</td>
          <td>675 mm × 675 mm (27" × 27")</td>
        </tr>
        <tr>
          <td>690</td>
          <td>690 mm (27")</td>
          <td>-</td>
          <td>750 mm × 750 mm (29" × 29")</td>
        </tr>
        <tr>
          <td>762</td>
          <td>762 mm (30")</td>
          <td>-</td>
          <td>900 mm × 900 mm (36" × 36")</td>
        </tr>
        <tr>
          <td>900</td>
          <td>900 mm (36")</td>
          <td>900 mm × 450 mm (36" × 18")</td>
          <td>1000 mm × 1000 mm (40" × 40")</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>1000 mm (40")</td>
          <td>990 mm × 1220 mm (40" × 49")</td>
          <td>1200 mm × 1200 mm (48" × 48")</td>
        </tr>
        <tr>
          <td>1400</td>
          <td>1400 mm (55") (2 covers with single frame)</td>
          <td>-</td>
          <td>1500 mm × 1500 mm (60" × 60")</td>
        </tr>
      </tbody>
    </table>
  </div>


</section> */}


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
