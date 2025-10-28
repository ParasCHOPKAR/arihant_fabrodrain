"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_grating_Page.module.css";

export default function FibrodrainRecessPage() {
  // Grating sizes (ascending order)
  const gratingSizes = [
    [6, 956, 1906, 2856],
    [44, 993, 1944, 2894],
    [82, 1032, 1982, 2932],
    [120, 1070, 2020, 2970],
    [158, 1108, 2058, 3008],
    [196, 1146, 2096, 3046],
    [234, 1184, 2134, 3084],
    [272, 1221, 2172, 3122],
    [310, 1222, 2210, 3160],
    [348, 1260, 2248, 3198],
    [386, 1298, 2286, 3236],
    [424, 1336, 2324, 3274],
    [462, 1374, 2362, 3312],
    [500, 1412, 2400, 3350],
    [538, 1450, 2438, 3388],
    [576, 1488, 2476, 3426],
    [614, 1526, 2514, 3464],
    [652, 1564, 2552, 3502],
    [690, 1602, 2590, 3540],
    [728, 1678, 2628, 3578],
    [766, 1716, 2666, 3616],
    [804, 1754, 2704, 3654],
    [842, 1792, 2742, "-"],
    [880, 1830, 2780, "-"],
    [918, 1868, 2818, "-"],
  ];

  // ✅ Fixed Flatten List for Mobile
  const flatSizes = gratingSizes
    .flat()
    .filter((size) => typeof size === "number") // keep only numbers
    .sort((a, b) => a - b);

  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          FIBRODRAIN GRATINGS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          FIBRODRAIN Gratings are manufactured and tested as per BS EN 124, IS 1726,
          and AASHTO M306 standards for drainage and utility applications, ensuring
          high load-bearing capacity and long-term reliability.
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
            src="/fibro_image/greating_05.jpg"
            alt="Fibrodrain Grating Product"
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
          <h2>Key Features</h2>
          <ul>
            <li>Made with zero filler – no air pockets, no extra painting needed.</li>
            <li>Higher impact strength than filler-based gratings.</li>
            <li>Self-colored, long-lasting finish.</li>
            <li>Single-piece moulded design for enhanced durability.</li>
          </ul>

          <h2>Applications</h2>
          <ul>
            <li>Swimming pools</li>
            <li>Industrial plants</li>
            <li>Podiums</li>
            <li>Basement car parks</li>
            <li>Stormwater drain trenches</li>
            <li>Cable trenches</li>
          </ul>
        </motion.div>
      </div>

      {/* SPECIFICATIONS TABLE */}
      <section className={styles.specifications}>
        <h2>Available Grating Sizes (mm)</h2>

        {/* Desktop Table */}
        <div className={styles.desktopTable}>
          {gratingSizes.map((row, idx) => (
            <div key={idx} className={styles.gridRow}>
              {row.map((size, colIdx) => (
                <div key={colIdx} className={styles.gridCell}>
                  {size}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Column View */}
        <motion.div
          className={styles.mobileTable}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {flatSizes.map((size, idx) => (
            <motion.div
              key={idx}
              className={styles.mobileCell}
              whileHover={{ scale: 1.05 }}
            >
              {size}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <h2>Need FIBRODRAIN Covers for Your Project?</h2>
        <p>
          Contact us today for bulk inquiries, customization options, or detailed
          technical data sheets. We’re here to help you choose the right product for
          your application.
        </p>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}
