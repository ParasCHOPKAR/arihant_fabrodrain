"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ===== LOGO & ABOUT ===== */}
        <div className={styles.logoSection}>
          <Image
            src="/images/logo_2.jpg"
            alt="Logo"
            width={150}
            height={50}
            className={styles.logo}
          />
          <p className={styles.about}>
            At <b>FIBRODRAIN</b>, we engineer durable and innovative solutions
            for industrial drainage — from precision manhole covers to
            high-load utility systems.
          </p>

          {/* SOCIAL ICONS */}
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/company/arihant-corporation-pune/" aria-label="LinkedIn">
              <Image
                src="/icons/LinkedIn_icon.svg.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.instagram.com/fibrodrain" aria-label="Instagram">
              <Image
                src="/icons/Instagram_icon.png.webp"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/people/Fibrodrain-FRP-Products/61555971689060/?rdid=3FP1CAG3WJ4142md&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BRTMchbbo%2F" aria-label="Facebook">
              <Image
                src="/icons/facebook.jpg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/industries-served">Industries Served</Link></li>
            <li><Link href="/comparative-chart">Features Comparison</Link></li>
            <li><Link href="/load-testing">Load Testing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ===== OUR PRODUCTS ===== */}
        <div className={styles.linksSection}>
          <h4>Our Products</h4>
          <ul>
            <li><Link href="/products/thermodrain_solid_top">Solid Top Manhole Covers with Frame</Link></li>
            <li><Link href="/products/thermodrain_multi_cover">Multiple Covers with Frame</Link></li>
            <li><Link href="/products/thermodrain_recess">Recess Manhole Cover Sizes</Link></li>
            <li><Link href="/products/thermodrain_air_cover">Air and Watertight Covers with Frame</Link></li>
            <li><Link href="/products/thermodrain_gratings">Gratings</Link></li>
            <li><Link href="/products/thermodrain_water_cover">Water Gully Covers</Link></li>
            <li><Link href="/products/thermodrain_frp_grp_cover">Drain Channels with Grating / Gully Cover</Link></li>
            <li><Link href="/products/thermodrain_tree_cover">Tree Gratings</Link></li>
            <li><Link href="/products/thermodrain_angle_cover">L Angle</Link></li>
            <li><Link href="/products/thermodrain_hinged_cover">Hinged Overhead and U.G. Water Tank Covers</Link></li>
            <li><Link href="/products/thermodrain_chamber_cover">Chambers</Link></li>
            <li><Link href="/products/thermodrain_lifting_cover">Lifting Accessories</Link></li>
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div className={styles.contactSection}>
          <h4>Contact Info</h4>

          <div className={styles.contactItem}>
            <Image
              src="/icons/location.png"
              alt="Location"
              width={20}
              height={20}
              className={styles.contactIcon}
            />
            <p> Shop no. 120+121, 1 floor, Ultima Business Centre </p>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/call.png"
              alt="Phone"
              width={20}
              height={20}
              className={styles.contactIcon}
            />
            <p>+91 9637819378</p>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/email.jpg"
              alt="Email"
              width={20}
              height={20}
              className={styles.contactIcon}
            />
            <p>krunal3399@gmail.com</p>
          </div>

          <a href="/contact">Get in Touch</a>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} FIBRODRAIN. All Rights Reserved.</p>
        <p className={styles.developer}>Developed by DW INNOVATION PVT. LTD.</p>
      </div>
    </footer>
  );
};

export default Footer;
