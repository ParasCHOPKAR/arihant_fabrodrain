"use client";
import styles from "./whyChooseUs.module.css";
import { FaCheckCircle, FaShieldAlt, FaHandsHelping, FaIndustry } from "react-icons/fa";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaCheckCircle />,
    title: "High Quality",
    description: "Our products are made using top-grade materials ensuring long-lasting durability."
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliability",
    description: "Trusted by clients for consistent performance and precision in every product."
  },
  {
    icon: <FaHandsHelping />,
    title: "Customer Support",
    description: "Dedicated team available to assist you with inquiries, quotes, and project needs."
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Expertise",
    description: "Years of experience in manufacturing concrete chamber covers and drain solutions."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Us</h2>
        <p className={styles.subheading}>
          At Arihant Industries, we are committed to excellence in every product and service.
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
