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
          FIBRODRAIN WATER GULLY COVERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          FIBRODRAIN Water Gully Covers are tested as per BS EN 124, IS 1726 & AASHTO M306
          standards for drainage and utility services meeting all requirements of the code.
          THERMODRAIN Water Gully Covers perform better than Cast Iron, Ductile Iron, and RCC manhole covers.
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
          <h2>Key Features</h2>
          <ul>
            <li>Load bearing capacity: from 2.5T to E600 (60T).</li>
            <li>Available in all standard sizes (refer specifications below).</li>
            <li>Zero permanent set across all sizes and load ranges.</li>
            <li>Self-pigmented (not painted) for lasting durability.</li>
            <li>Minimum 30% clear opening ensures smooth water flow.</li>
          </ul>

          <h2>Areas of Application :</h2>
          <ul>
            <li>Storm water drain trenches</li>
            <li>Basement car parks</li>
            <li>Podiums</li>
            <li>Industrial plants</li>
          </ul>

          <Link href="/contact"></Link>
        </motion.div>
      </div>

      {/* SPECIFICATIONS SECTION */}
      <section className={styles.specifications}>
        <h2>Frame Clear Opening & Cover Out to Out Size</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Frame Clear Opening</th>
                <th>Cover Out to Out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rectangular</td>
                <td>640 mm × 240 mm</td>
                <td>700 mm × 300 mm</td>
              </tr>
              <tr>
                <td>Rectangular</td>
                <td>385 mm × 317 mm</td>
                <td>445 mm × 377 mm</td>
              </tr>
              <tr>
                <td>Rectangular</td>
                <td>500 mm × 600 mm</td>
                <td>560 mm × 660 mm</td>
              </tr>
              <tr>
                <td>Rectangular</td>
                <td>900 mm × 600 mm</td>
                <td>960 mm × 660 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>450 mm × 450 mm</td>
                <td>515 mm × 515 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>600 mm × 600 mm</td>
                <td>660 mm × 660 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>750 mm × 700 mm</td>
                <td>816 mm × 816 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>900 mm × 900 mm</td>
                <td>966 mm × 966 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>300 mm × 300 mm</td>
                <td>360 mm × 360 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>450 mm × 450 mm</td>
                <td>515 mm × 515 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>600 mm × 600 mm</td>
                <td>660 mm × 660 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>750 mm × 750 mm</td>
                <td>816 mm × 816 mm</td>
              </tr>
              <tr>
                <td>Square</td>
                <td>900 mm × 900 mm</td>
                <td>966 mm × 966 mm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Fibrodrain FRP/GRP Water Gully Covers – Sizes (With or Without Frame)</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Size (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>640 × 240</td></tr>
              <tr><td>2</td><td>700 × 300</td></tr>
              <tr><td>3</td><td>385 × 317</td></tr>
              <tr><td>4</td><td>445 × 377</td></tr>
              <tr><td>5</td><td>500 × 600</td></tr>
              <tr><td>6</td><td>560 × 660</td></tr>
              <tr><td>7</td><td>900 × 600</td></tr>
              <tr><td>8</td><td>960 × 660</td></tr>
              <tr><td>9</td><td>450 × 450</td></tr>
              <tr><td>10</td><td>515 × 515</td></tr>
              <tr><td>11</td><td>600 × 600</td></tr>
              <tr><td>12</td><td>660 × 660</td></tr>
              <tr><td>13</td><td>750 × 700</td></tr>
              <tr><td>14</td><td>816 × 816</td></tr>
              <tr><td>15</td><td>900 × 900</td></tr>
              <tr><td>16</td><td>966 × 966</td></tr>
              <tr><td>17</td><td>300 × 300</td></tr>
              <tr><td>18</td><td>360 × 360</td></tr>
              <tr><td>19</td><td>450 × 450</td></tr>
              <tr><td>20</td><td>515 × 515</td></tr>
              <tr><td>21</td><td>600 × 600</td></tr>
              <tr><td>22</td><td>660 × 660</td></tr>
              <tr><td>23</td><td>750 × 750</td></tr>
              <tr><td>24</td><td>816 × 816</td></tr>
              <tr><td>25</td><td>900 × 900</td></tr>
              <tr><td>26</td><td>966 × 966</td></tr>
            </tbody>
          </table>
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
