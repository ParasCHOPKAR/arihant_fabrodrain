"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_tree_Page.module.css";

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
FIBRODRAIN TREE GRATINGS

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
FIBRODRAIN Water Gully Covers are tested as per BS EN 124, IS1726 & AASHTO M306 standards for drainage and Utility services meeting all requirements of the code. Water Gully Covers are better performing than Cast Iron, Ductile Iron and RCC manhole covers.
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
            src="/fibro_image/tree_greating_08.jpg"
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
          <h2> Key Features</h2>
          <ul>
            <li>Self-pigmented (not painted), long-lasting finish.</li>
            <li>Available in two-piece or four-piece design for easy installation.</li>
            <li>Protects soil while allowing safe pedestrian movement aroundtrees.</li>
                 <li>Allows rainwater to reach the soil naturally.</li>
                     <li>Enhances landscaping and aesthetics with artistic designs</li>
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
{/* SPECIFICATIONS TABLE */}
<section className={styles.specifications}>
  <h2>FIBRODRAIN Tree Grating Sizes</h2>

  <h3>Rectangular Covers</h3>
  <div className={styles.tableWrapper}>
    <table className={styles.specTable}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Frame Clear Opening</th>
          <th>Cover Out to Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>640 mm x 240 mm</td><td>700 mm x 300 mm</td></tr>
        <tr><td>2</td><td>385 mm x 317 mm</td><td>445 mm x 377 mm</td></tr>
        <tr><td>3</td><td>500 mm x 600 mm</td><td>560 mm x 660 mm</td></tr>
        <tr><td>4</td><td>900 mm x 600 mm</td><td>960 mm x 660 mm</td></tr>
        <tr><td>5</td><td>450 mm x 450 mm</td><td>515 mm x 515 mm</td></tr>
        <tr><td>6</td><td>600 mm x 600 mm</td><td>660 mm x 660 mm</td></tr>
        <tr><td>7</td><td>750 mm x 700 mm</td><td>816 mm x 816 mm</td></tr>
        <tr><td>8</td><td>900 mm x 900 mm</td><td>966 mm x 966 mm</td></tr>
        <tr><td>9</td><td>966 mm x 966 mm</td><td>1032 mm x 1032 mm</td></tr>
        <tr><td>10</td><td>...</td><td>...</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Square Covers</h3>
  <div className={styles.tableWrapper}>
    <table className={styles.specTable}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Frame Clear Opening</th>
          <th>Cover Out to Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>300 mm x 300 mm</td><td>360 mm x 360 mm</td></tr>
        <tr><td>2</td><td>450 mm x 450 mm</td><td>515 mm x 515 mm</td></tr>
        <tr><td>3</td><td>600 mm x 600 mm</td><td>660 mm x 660 mm</td></tr>
        <tr><td>4</td><td>750 mm x 750 mm</td><td>816 mm x 816 mm</td></tr>
        <tr><td>5</td><td>900 mm x 900 mm</td><td>966 mm x 966 mm</td></tr>
      </tbody>
    </table>
  </div>
</section>
