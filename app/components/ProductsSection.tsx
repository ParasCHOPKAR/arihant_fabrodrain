"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import styles from "./productSlider.module.css";

interface Product {
  name: string;
  img: string;
  link: string; // <-- add link property
}

const products: Product[] = [
  { name: "THERMODRAIN Solid Top Manhole Covers With Frame", img: "/images/product_01.jpg", link: "/products/thermodrain_air_cover" },
  { name: "THERMODRAIN Multiple Covers With Frame", img: "/images/product_02.jpg", link: "/products/thermodrain_angle_cover" },
  { name: "Thermodrain Recess Manhole Covers (With Frame)", img: "/images/product_03.jpg", link: "/products/thermodrain_chamber_cover" },
  { name: "THERMODRAIN Air & Watertight (Pressfit) Covers With Frame", img: "/images/product_04.jpg", link: "/products/thermodrain_frp_grp_cover" },
  { name: "THERMODRAIN Gratings", img: "/images/product_05.jpg", link: "/products/thermodrain_gratings" },
  { name: "Thermodrain Water Gully Covers", img: "/images/product_06.jpg", link: "/products/thermodrain_hinged_cover" },
  { name: "Thermodrain FRP/GRP Drain Channels With Grating / Gully Covers", img: "/images/product_07.jpg", link: "/products/thermodrain_lifting_cover" },
  { name: "THERMODRAIN Tree Gratings", img: "/images/product_08.jpg", link: "/products/thermodrain_multi_cover" },
  { name: "THERMODRAIN L Angle", img: "/images/product_09.jpg", link: "/products/thermodrain_recess" },
  { name: "THERMODRAIN Hinged Overhead And U.G. Water Tank Covers", img: "/images/product_10.jpg", link: "/products/thermodrain_solid_top" },
  { name: "THERMODRAIN Chambers", img: "/images/product_11.jpg", link: "/products/thermodrain_tree_covers" },
  { name: "THERMODRAIN Lifting Accessories", img: "/images/product_12.jpg", link: "/products/thermodrain_water_cover" },
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
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        modules={[Autoplay, Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link href={product.link} className={styles.productCard}>
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className={styles.productImage}
              />
              <span className={styles.productName}>{product.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
