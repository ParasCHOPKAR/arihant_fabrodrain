"use client";
import React from "react";
import styles from "./ProductPage.module.css";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Solid Top Manhole Covers with Frame", img: "/product_img/pruduct_01.jpg", link: "/products/thermodrain_solid_top" },
  { name: "Multiple Covers with Frame", img: "/product_img/pruduct_02.jpg", link: "/products/thermodrain_multi_cover" },
  { name: "Recess Manhole Cover Sizes", img: "/product_img/pruduct_03.jpg", link: "/products/thermodrain_recess" },
  { name: "Air and Watertight Covers with Frame", img: "/product_img/pruduct_04.jpg", link: "/products/thermodrain_air_cover" },
  { name: "Gratings", img: "/product_img/pruduct_05.jpg", link: "/products/thermodrain_gratings" },
  { name: "Water Gully Cover", img: "/product_img/pruduct_06.jpg", link: "/products/thermodrain_water_cover" }, // ✅ fixed (added /)
  { name: "Drain Channels with Grating/Gully Cover", img: "/product_img/pruduct_07.jpg", link: "/products/thermodrain_frp_grp_cover" },
  { name: "Tree Gratings", img: "/product_img/pruduct_08.jpg", link: "/products/thermodrain_tree_cover" },
  { name: "L Angle", img: "/product_img/pruduct_09.jpg", link: "/products/thermodrain_angle_cover" },
  { name: "Hinged Overhead and U.G. Water Tank Covers", img: "/product_img/pruduct_10.jpg", link: "/products/thermodrain_hinged_cover" }, // ✅ fixed (added /)
  { name: "Chambers", img: "/product_img/pruduct_11.jpg", link: "/products/thermodrain_chamber_cover" },
  { name: "Lifting Accessories", img: "/product_img/pruduct_12.jpg", link: "/products/thermodrain_lifting_cover" },
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
