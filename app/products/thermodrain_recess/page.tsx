"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Thermodrain_recess_Page.module.css";

export default function FibrodrainRecessPage() {
  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          FIBRODRIAN RECESS MANHOLE COVERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          FIBRODRAIN Recess Manhole Covers with frames are tested as per BS EN 124, 
          IS 1726 &amp; AASHTO M306 standards for drainage and utility services, ensuring 
          reliable performance. They provide superior strength, durability and 
          long-lasting performance compared to Cast Iron, Ductile Iron and RCC 
          recess covers.
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
            src="/fibro_image/recess_manhole_cover.jpg"
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
          <h2>Material: FRP / GRP / Composite</h2>
          <ul>
            <li>Load bearing capacity: From 2.5 tons up to D400 (40 tons)</li>
            <li>Available in circular, square and rectangular shapes</li>
            <li>Double seal arrangement for added safety</li>
            <li>Lightweight and easy to handle, superior to conventional materials</li>
            <li>Zero permanent set – retains shape and strength under load</li>
            <li>65 mm recess depth for fixing cement, tiles, blocks, or other finishes</li>
            <li>All keyholes have closed bottoms (not through &amp; through) for longer life</li>
          </ul>

          <h2>Properties of Fibrodrain Recess Covers</h2>
          <ul>
            <li>
              <strong>Closed Keyholes –</strong> All lifting keyholes are closed at the bottom,
              preventing foul smell and dust from entering the chamber.
            </li>
            <li>
              <strong>Double Seal Design –</strong> Each manhole cover has a double seal for
              extra safety and protection.
            </li>
            <li>
              <strong>Reinforced Keyhole Inserts –</strong> High-strength plastic alloy or
              stainless steel inserts ensure durability around keyholes during repeated use.
            </li>
          </ul>
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
                <td>500</td>
                <td>500 mm (20&quot;)</td>
                <td>-</td>
                <td>300 mm × 300 mm (12&quot; × 12&quot;)</td>
              </tr>
              <tr>
                <td>600</td>
                <td>600 mm (24&quot;)</td>
                <td>600 mm × 450 mm (24&quot; × 18&quot;)</td>
                <td>450 mm × 450 mm (18&quot; × 18&quot;)</td>
              </tr>
              <tr>
                <td>690</td>
                <td>690 mm (27&quot;)</td>
                <td>-</td>
                <td>600 mm × 600 mm (24&quot; × 24&quot;)</td>
              </tr>
              <tr>
                <td>762</td>
                <td>762 mm (30&quot;)</td>
                <td>-</td>
                <td>750 mm × 750 mm (29&quot; × 29&quot;)</td>
              </tr>
              <tr>
                <td>900</td>
                <td>900 mm (36&quot;)</td>
                <td>900 mm × 450 mm (36&quot; × 18&quot;)</td>
                <td>900 mm × 900 mm (36&quot; × 36&quot;)</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>1000 mm (40&quot;)</td>
                <td>990 mm × 1220 mm (40&quot; × 49&quot;)</td>
                <td>1000 mm × 1000 mm (40&quot; × 40&quot;)</td>
              </tr>
              <tr>
                <td>1200</td>
                <td>-</td>
                <td>-</td>
                <td>1200 mm × 1200 mm (48&quot; × 48&quot;)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <h2>Need FIBRODRAIN Covers for Your Project?</h2>
        <p>
          Contact us today for bulk inquiries, customization options, or detailed
          technical data sheets. We&apos;re here to help you choose the right product
          for your application.
        </p>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}
