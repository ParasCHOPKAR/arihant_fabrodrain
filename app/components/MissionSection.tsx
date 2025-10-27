"use client";
import Image from "next/image";
import { FaBinoculars, FaLightbulb, FaBullseye } from "react-icons/fa";
import styles from "./missionSection.module.css";

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Our Mission</h2>
          <div className={styles.underline}></div>

          {[
            {
              icon: <FaBinoculars className={styles.icon} />,
              title: "Vision",
              text: "We envision a future driven by innovation, sustainability and growth—where our solutions empower businesses to thrive.",
            },
            {
              icon: <FaLightbulb className={styles.icon} />,
              title: "Mission",
              text: "To deliver reliable, efficient and high-quality products and services that exceed customer expectations every time.",
            },
            {
              icon: <FaBullseye className={styles.icon} />,
              title: "Goals",
              text: "To continuously innovate and optimize our processes, ensuring long-term value creation for clients and communities.",
            },
          ].map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Images */}
        <div className={styles.rightImages}>
          <div className={styles.grid}>
            <div className={styles.shape}>
              <Image
                src="/images/about__011.jpg"
                alt="Mission"
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.shape}>
              <Image
                src="/images/about_01.jpg"
                alt="Mission"
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.shape}>
              <Image
                src="/images/about__22.jpg"
                alt="Mission"
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.shapeLarge}>
              <Image
                src="/images/about__33.jpg"
                alt="Mission"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
      