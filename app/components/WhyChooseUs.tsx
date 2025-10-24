"use client";

import React from "react";
import styles from "./whyChooseUs.module.css";
import { FaCheckCircle, FaCloudSun, FaLeaf, FaCubes } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaCheckCircle />,
    title: "FRP Technology",
    description: "Stronger than concrete & lighter than metal — offering superior performance and longevity."
  },
  {
    icon: <FaCloudSun />,
    title: "Corrosion & Weather Resistant",
    description: "Built to last in all conditions, ensuring durability and reliability even in harsh environments."
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Manufacturing",
    description: "Sustainably made using recyclable materials, reducing carbon footprint and promoting a greener planet."
  },
  {
    icon: <FaCubes />,
    title: "Tailored Solutions",
    description: "Available in multiple sizes, shapes, and load capacities to meet diverse project requirements."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Fibrodrain?</h2>
        <p className={styles.subheading}>
          At Fibrodrain, we’re not just supplying drainage products — we’re building safer, smarter, and more sustainable infrastructure for tomorrow.
        </p>
        <div className={styles.cards}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
