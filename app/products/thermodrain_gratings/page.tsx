"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_grating_Page.module.css";

export default function FibrodrainRecessPage() {
  const gratingSizes = [
    6, 44, 82, 120, 158, 196, 234, 272, 310, 348, 386, 424, 462, 500, 538, 576,
    614, 652, 690, 728, 766, 804, 842, 880, 918, 20, 25, 30, 956, 993, 1032, 1070,
    1108, 1146, 1184, 1221, 1222, 1260, 1298, 1336, 1374, 1412, 1450, 1488, 1526,
    1564, 1602, 1678, 1716, 1754, 1792, 1830, 1868, 1906, 1944, 1982, 2020, 2058,
    2096, 2134, 2172, 2210, 2248, 2286, 2324, 2362, 2400, 2438, 2476, 2514, 2552,
    2590, 2628, 2666, 2704, 2742, 2780, 2818, 2856, 2894, 2932, 2970, 3008, 3046,
    3084, 3122, 3160, 3198, 3236, 3274, 3312, 3350, 3388, 3426, 3464, 3502, 3540,
    3578, 3616, 3654
  ];

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
FIBRODRAIN Gratings are manufactured and tested as per BS EN 124, IS 1726, and AASHTO M306 standards for drainage and utility applications, ensuring high load-bearing capacity and long-term reliability. They offer excellent strength, durability, and corrosion resistance, outperforming conventional materials like Cast Iron, Ductile Iron, and RCC gratings in both performance and longevity.
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
            alt="Fibrodrain Recess Manhole Cover"
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
            <li>Made with zero filler, so no air pockets, no need for extra painting or coating.</li>
            <li>High impact strength compared to filler-based gratings.</li>
            <li>Self-colored (not painted), long-lasting finish.</li>
            <li>Single-piece moulded, jointless design for extra durability.</li>
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
  <div className={styles.tableWrapper}>
    <div className={styles.gridTable}>
      {Array.from({ length: Math.ceil(gratingSizes.length / 4) }).map((_, rowIdx) => (
        <div key={rowIdx} className={styles.gridRow}>
          {[0, 1, 2, 3].map(colIdx => {
            const size = gratingSizes[rowIdx + colIdx * Math.ceil(gratingSizes.length / 4)];
            return (
              <div key={colIdx} className={styles.gridCell}>
                {size || "-"}
              </div>
            );
          })}
        </div>
      ))}
    </div>
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
