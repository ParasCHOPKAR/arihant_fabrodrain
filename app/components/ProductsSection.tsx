"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import styles from "./productSlider.module.css";

interface Product {
  name: string;
  img: string;
  link: string;
}

const products: Product[] = [
  { name: "Solid Top Manhole Covers With Frame", img: "/product_img/solid.jpg", link: "/products/thermodrain_air_cover" },
  { name: "Multiple Covers With Frame", img: "/product_img/multi_cover.jpg", link: "/products/thermodrain_angle_cover" },
  { name: "Recess Manhole Covers (With Frame)", img: "/product_img/recess.jpg", link: "/products/thermodrain_chamber_cover" },
  { name: "Air & Watertight (Pressfit) Covers With Frame", img: "/product_img/air_water_tight.jpg", link: "/products/thermodrain_frp_grp_cover" },
  { name: "Gratings", img: "/product_img/grating.jpg", link: "/products/thermodrain_gratings" },
  { name: "Water Gully Covers", img: "/product_img/water_gully_cover.jpg", link: "/products/thermodrain_hinged_cover" },
  { name: "FRP/GRP Drain Channels With Grating / Gully Covers", img: "/product_img/frp_grp_drain.jpg", link: "/products/thermodrain_lifting_cover" },
  { name: "Tree Gratings", img: "/product_img/tree_grating.jpg", link: "/products/thermodrain_multi_cover" },
  { name: "L Angle", img: "/fibro_image/l_angle_09.jpg", link: "/products/thermodrain_recess" },
  { name: "Hinged Overhead And U.G. Water Tank Covers", img: "/product_img/hinged_overhead.jpg", link: "/products/thermodrain_solid_top" },
  { name: "Chambers", img: "/product_img/chamber_cover.jpg", link: "/products/thermodrain_tree_covers" },
  { name: "Lifting Accessories", img: "/fibro_image/lifting_acce_12.jpg", link: "/products/thermodrain_water_cover" },
];

export default function ProductsSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.heading}>Our Products</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link href={product.link} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={350}
                  height={250}
                  className={styles.productImage}
                />
                <div className={styles.productOverlay}>
                  <h3>{product.name}</h3>
                  <button>View More</button>
                </div>
              </div>

              {/* Shown only on mobile */}
              <p className={styles.productName}>{product.name}</p>
              <button className={styles.mobileViewMore}>View More</button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
