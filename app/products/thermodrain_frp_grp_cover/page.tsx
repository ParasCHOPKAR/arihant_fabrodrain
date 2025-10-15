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
          THERMODRAIN FRP/GRP DRAIN CHANNELS WITH GRATING / GULLY COVERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Method Of Installation Of Thermodrain (1 Piece Type) For Surface Drainage For Exterior And Basements (recommended For Short Length Upto 30 Mtrs)
        </motion.p>
      </section>

      {/* INSTALLATION METHOD SECTION */}
      <section className={styles.installation}>
        <div className={styles.method}>
          <h2>1 Piece Type Installation Steps</h2>
          <ol>
            <li>Prepare a trench of 200 mm extra width than the drain channel width.</li>
            <li>
              Before laying the Drain channel, check the compactness of the soil and ensure that it is compact enough 
              and will not sink due to load. If soil is insufficient, create a concrete bed with slope of 1 mm/m for water flow.
            </li>
            <li>
              Place the Drain channel in position from the starting point to exit point.
            </li>
            <li>
              Apply silicone sealant on the step in the channel for joining connecting pieces like Bend, Tee, or Four-way Tee.
            </li>
            <li>
              Use connectors like 90° Bend, Tee, and Four-way Tee as per site layout requirements.
            </li>
            <li>
              Refill the empty space around the channel with concrete/soil, compact it, level with grating, clean, and place grating/gully covers.
            </li>
          </ol>

          <h2>2 Piece Type Installation Steps</h2>
          <ol>
            <li>Prepare a trench of 200 mm extra width than the drain channel width.</li>
            <li>
              Check soil compactness. If inadequate, create a concrete bed with slope of 1 mm/m.
            </li>
            <li>
              Place the Drain channel in position from start to exit.
            </li>
            <li>
              Apply silicone sealant for joining connecting pieces.
            </li>
            <li>
              Use connectors as per site layout (90° Bend, Tee, Four-way Tee).
            </li>
            <li>
              Refill around the channel with concrete/soil, compact, level, clean, and place gratings/gully covers.
            </li>
          </ol>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.imageWrapper}
      >
        <Image
          src="/product_img/pruduct_04.jpg"
          alt="Thermodrain Drain Channel"
          width={600}
          height={600}
          className={styles.productImage}
        />
      </motion.div>

      {/* CHANNEL SIZES TABLE */}
      <section className={styles.specifications}>
        <h2>THERMODRAIN FRP/GRP/COMPOSITE DRAIN CHANNEL WITH GRATING / GULLY COVER</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>OUT TO OUT DRAIN CHANNEL SIZE</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>128 mm(w) x 155 mm(ht.) x 1000 mm(It.)</td></tr>
              <tr><td>2</td><td>167 mm(w) x 155 mm(ht.) x 1000 mm(It.)</td></tr>
              <tr><td>3</td><td>326 mm(w) x 300 mm(ht.) x 1000 mm(It.)</td></tr>
              <tr><td>4</td><td>525 mm(w) x 300 mm(ht.) x 1000 mm(It.)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ADVANTAGES / DISADVANTAGES TABLE */}
      <section className={styles.advDisadv}>
        <h2>Advantages vs Disadvantages</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>ADVANTAGES OF FRP/GRP DRAIN CHANNELS</th>
                <th>DISADVANTAGES OF CEMENT / CONCRETE DRAIN CHANNELS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blocks site space for minimum time</td>
                <td>Site remains blocked due to larger preparation time</td>
              </tr>
              <tr>
                <td>Quick to install</td>
                <td>Long installation time due to large civil work</td>
              </tr>
              <tr>
                <td>Minimum manpower required</td>
                <td>Huge manpower required</td>
              </tr>
              <tr>
                <td>Very low labour cost</td>
                <td>Very high labour cost</td>
              </tr>
              <tr>
                <td>Fast & simple installation</td>
                <td>Highly dependent on manpower availability</td>
              </tr>
              <tr>
                <td>No waterproofing required</td>
                <td>Waterproofing is required</td>
              </tr>
              <tr>
                <td>No separate MS/FRP angles required</td>
                <td>Separate MS/FRP angles required</td>
              </tr>
              <tr>
                <td>No hidden cost</td>
                <td>Hidden cost due to labour-oriented installation</td>
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
