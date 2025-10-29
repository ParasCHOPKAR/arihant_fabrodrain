"use client";
import React from "react";
import styles from "./ProductPage.module.css";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Solid Top Manhole Covers with Frame", img: "/product_img/solid.jpg", link: "/products/thermodrain_solid_top" },
  { name: "Multiple Covers with Frame", img: "/fibro_image/multi_cover.jpg", link: "/products/thermodrain_multi_cover" },
  { name: "Recess Manhole Cover Sizes", img: "/product_img/recess.jpg", link: "/products/thermodrain_recess" },
  { name: "Air and Watertight Covers with Frame", img: "/fibro_image/wter_cover_04.jpg", link: "/products/thermodrain_air_cover" },
  { name: "Gratings", img: "/fibro_image/greating_05.jpg", link: "/products/thermodrain_gratings" },
  { name: "Water Gully Cover", img: "/fibro_image/water_gully_06.jpg", link: "/products/thermodrain_water_cover" }, // ✅ fixed (added /)
  { name: "Drain Channels with Grating/Gully Cover", img: "/product_img/water_gully_cover.jpg", link: "/products/thermodrain_frp_grp_cover" },
  { name: "Tree Gratings", img: "/product_img/tree_grating.jpg", link: "/products/thermodrain_tree_cover" },
  { name: "L Angle", img: "/fibro_image/l_angle_09.jpg", link: "/products/thermodrain_angle_cover" },
  { name: "Hinged Overhead and U.G. Water Tank Covers", img: "/product_img/hinged_overhead.jpg", link: "/products/thermodrain_hinged_cover" }, // ✅ fixed (added /)
  { name: "Chambers", img:"/fibro_image/chamber_11.jpg", link: "/products/thermodrain_chamber_cover" },
  { name: "Lifting Accessories", img:"/fibro_image/lifting_acce_12.jpg", link: "/products/thermodrain_lifting_cover" },
];

export default function ProductPage() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.heading}>Our Products</h2>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className={styles.image}
              />
            </div>
            <h3 className={styles.name}>{product.name}</h3>

            <Link href={product.link} className={styles.viewBtn}>
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
