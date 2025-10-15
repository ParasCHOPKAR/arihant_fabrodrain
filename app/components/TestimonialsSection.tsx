"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./testimonial.module.css";

interface Testimonial {
  name: string;
  designation: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    designation: "CEO, Company A",
    message: "The products provided by this company have transformed our operations. High quality and excellent support!"
  },
  {
    name: "Jane Smith",
    designation: "Plant Manager, Company B",
    message: "We are extremely satisfied with the service and professionalism. The solutions are top-notch."
  },
  {
    name: "Robert Johnson",
    designation: "Operations Head, Company C",
    message: "Reliable products and outstanding customer support. Highly recommended!"
  },
  {
    name: "Emily Davis",
    designation: "Engineer, Company D",
    message: "The team understood our requirements perfectly and delivered beyond expectations."
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
        }}
        modules={[Autoplay]}
      >
{testimonials.map((t, index) => (
  <SwiperSlide key={index}>
    <div className={styles.testimonialCard}>
      <div className={styles.stars}>
        <span>★ ★ ★ ★ ★</span>
      </div>
      <p className={styles.message}>&quot;{t.message}&quot;</p>
      <h4 className={styles.name}>{t.name}</h4>
      <p className={styles.designation}>{t.designation}</p>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </section>
  );
}
