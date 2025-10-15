"use client";

import Link from "next/link";
import Image from "next/image"; // Import Next.js Image
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & About */}
        <div className={styles.logoSection}>
          <Image
            src="/images/logo_2.jpg"
            alt="Logo"
            width={150} // adjust width
            height={50} // adjust height
            className={styles.logo}
          />
          <p className={styles.about}>
            At <b>THERMODRAIN</b>, we engineer durable and innovative solutions
            for industrial drainage — from precision manhole covers to high-load
            utility solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/industries-served">Industries Served</Link></li>
            <li><Link href="/comparative-chart">Features Comparison</Link></li>
            <li><Link href="/load-testing">Load Testing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h4>Contact Info</h4>
          <p>📍 123 Industrial Road, Pune, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ info@thermodrain.com</p>

          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/icons/LinkedIn_icon.svg.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/icons/Instagram_icon.png.webp"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} THERMODRAIN. All Rights Reserved.</p>
        <p className={styles.developer}>Developed by DW INNOVATION PVT. LTD.</p>
      </div>
    </footer>
  );
};

export default Footer;
