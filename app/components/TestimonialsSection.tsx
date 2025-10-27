"use client";

import React, { useEffect } from "react";
import styles from "./testimonial.module.css";

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "Solarica provided end-to-end solutions, from design to installation and support. Their expertise ensured smooth execution.",
    name: "Rohan Mehta",
    role: "Operations Head, Mars Intl. India",
  },
  {
    stars: "★★★★★",
    quote:
      "Professionalism and proactive project management. Strong technical expertise and timely responses impressed us.",
    name: "Priya Sharma",
    role: "Plant Manager, Dinex India",
  },
  {
    stars: "★★★★★",
    quote:
      "Their passion for environmental stewardship helped us achieve compliance and improve performance significantly.",
    name: "Anil Verma",
    role: "Project Engineer",
  },
  {
    stars: "★★★★★",
    quote:
      "Excellent after-sales support and quick turnaround. The installation team was efficient and courteous.",
    name: "Neha Kulkarni",
    role: "Facilities Lead, Vertex Tech",
  },
  {
    stars: "★★★★★",
    quote:
      "Great ROI from the solar retrofit. Clear documentation and reliable performance across all sites.",
    name: "Rajesh Iyer",
    role: "Director, Iyer Logistics",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    const tflow = document.getElementById("tflow");
    if (!tflow) return;

    const stage = tflow.querySelector(`.${styles.tflowStage}`) as HTMLElement;
    const slides = Array.from(
      tflow.querySelectorAll(`.${styles.tflowSlide}`)
    ) as HTMLElement[];
    const dotsWrap = document.getElementById("tflowDots");

    if (!stage || !slides.length || !dotsWrap) return;

    // Create navigation dots dynamically
    dotsWrap.innerHTML = slides
      .map(
        (_, i) =>
          `<span class="${styles.tflowDot} ${
            i === 0 ? styles.active : ""
          }"></span>`
      )
      .join("");

    const dots = Array.from(
      dotsWrap.querySelectorAll(`.${styles.tflowDot}`)
    ) as HTMLElement[];

    let idx = 0;
    let timer: NodeJS.Timeout | null = null;

    const render = () => {
      const base = Math.min(200, Math.max(120, stage.clientWidth / 5.5));

      slides.forEach((el, i) => {
        const rel = ((i - idx) + slides.length) % slides.length;
        const half = Math.floor(slides.length / 2);
        const side = rel <= half ? rel : rel - slides.length;
        const x = side * base;
        const s = side === 0 ? 1 : 0.82 - Math.min(Math.abs(side) - 1, 2) * 0.08;

        el.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${s})`;
        el.style.zIndex = String(100 - Math.abs(side));
        const active = side === 0;
        el.classList.toggle(styles.isActive, active);
      });

      dots.forEach((d, i) => d.classList.toggle(styles.active, i === idx));
    };

    const next = () => {
      idx = (idx + 1) % slides.length;
      render();
    };

    const start = () => {
      if (!timer) timer = setInterval(next, 3500); // auto slide every 3.5s
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    render();
    start();

    // Pause on hover
    tflow.addEventListener("mouseenter", stop);
    tflow.addEventListener("mouseleave", start);

    // Manual navigation by dots
    dots.forEach((d, i) =>
      d.addEventListener("click", () => {
        stop();
        idx = i;
        render();
        start();
      })
    );

    // Recalculate on resize
    window.addEventListener("resize", render);

    return () => {
      stop();
      window.removeEventListener("resize", render);
    };
  }, []);

  return (
    <section className={styles.testimonialsFlow} aria-label="Testimonials">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Testimonial</h2>
        <div className={styles.tflow} id="tflow">
          <div className={styles.tflowStage}>
            {testimonials.map((t, i) => (
              <article key={i} className={styles.tflowSlide}>
                <div className={styles.tflowStars}>{t.stars}</div>
                <p className={styles.tflowQuote}>{t.quote}</p>
                <div className={styles.tflowName}>{t.name}</div>
                <div className={styles.tflowRole}>{t.role}</div>
              </article>
            ))}
          </div>
          <div className={styles.tflowDots} id="tflowDots"></div>
        </div>
      </div>
    </section>
  );
}
