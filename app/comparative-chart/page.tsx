"use client";

import React, { useState } from "react";
import Image from "next/image"; // Next.js Image
import styles from "./Comparative.module.css"; // CSS Modules

const ComparativePage = () => {
  const images = [
    "/icons/2.png",
    "/icons/3.png",
    "/icons/4.png",
    "/icons/5.png",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (img: string) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImg("");
  };

  return (
    <div className={styles.comparativePage}>
      {/* HERO SECTION */}
      <section className={styles.comparativeHero}>
        <h1>Comparative Chart</h1>
        <p>
          Compare our products and solutions across various specifications and
          features to make an informed decision.
        </p>
      </section>

      {/* COMPARISON IMAGES */}
      <section className={styles.comparisonImages}>
        {images.map((img, idx) => (
          <div
            className={styles.imageCard}
            key={idx}
            onClick={() => openModal(img)}
          >
            <Image
            src={img}
  alt={`Comparison ${idx + 1}`}
  width={800}
  height={800}
  className={styles.cardImage}
  priority
/>

          </div>
        ))}
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
              &times;
            </button>
            <Image
              src={currentImg}
              alt="Open Comparison"
              width={800}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparativePage;
