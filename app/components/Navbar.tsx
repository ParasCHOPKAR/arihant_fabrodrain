"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image
import styles from "./navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);

  const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const menu = e.currentTarget.nextElementSibling as HTMLElement;
      const arrow = e.currentTarget.querySelector(`.${styles.arrow}`) as HTMLElement;

      if (menu.classList.contains(styles.show)) {
        menu.classList.remove(styles.show);
        arrow.classList.remove(styles.rotate);
      } else {
        closeAllDropdowns();
        menu.classList.add(styles.show);
        arrow.classList.add(styles.rotate);
      }
    }
  };

  const closeAllDropdowns = () => {
    document.querySelectorAll(`.${styles.dropdownMenu}`).forEach(menu => menu.classList.remove(styles.show));
    document.querySelectorAll(`.${styles.arrow}`).forEach(arrow => arrow.classList.remove(styles.rotate));
  };

  const closeMenu = () => {
    setMenuActive(false);
    closeAllDropdowns();
  };

  return (
    <>
      {/* Overlay */}
      <div className={`${styles.overlay} ${menuActive ? styles.show : ""}`} onClick={closeMenu}></div>

      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo_2.png"
            alt="Logo"
            width={150}   // Adjust width according to design
            height={50}   // Adjust height according to design
            priority      // Optional: preload logo for faster LCP
          />
        </Link>

        {/* Hamburger Toggle */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuActive ? styles.active : ""}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>

          <li>
            <a href="#" onClick={toggleDropdown}>
              Products <span className={styles.arrow}>▼</span>
            </a>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/products/thermodrain_solid_top" onClick={closeMenu}>THERMODRAIN Solid Top Manhole Covers With Frame</Link></li>
              <li><Link href="/products/thermodrain_multi_cover" onClick={closeMenu}>THERMODRAIN Multiple Covers With Frame</Link></li>
              <li><Link href="/products/thermodrain_recess" onClick={closeMenu}>Thermodrain Recess Manhole Covers (With Frame)</Link></li>
              <li><Link href="/products/thermodrain_air_cover" onClick={closeMenu}>THERMODRAIN Air & Watertight (Pressfit) Covers With Frame</Link></li>
              <li><Link href="/products/thermodrain_gratings" onClick={closeMenu}>THERMODRAIN Gratings</Link></li>
              <li><Link href="/products/thermodrain_water_cover" onClick={closeMenu}>Thermodrain Water Gully Covers</Link></li>
              <li><Link href="/products/thermodrain_frp_grp_cover" onClick={closeMenu}>Thermodrain FRP/GRP Drain Channels With Grating / Gully Covers</Link></li>
              <li><Link href="/products/thermodrain_tree_cover" onClick={closeMenu}>THERMODRAIN Tree Gratings</Link></li>
              <li><Link href="/products/thermodrain_angle_cover" onClick={closeMenu}>THERMODRAIN L Angle</Link></li>
              <li><Link href="/products/thermodrain_hinged_cover" onClick={closeMenu}>THERMODRAIN Hinged Overhead And U.G. Water Tank Covers</Link></li>
              <li><Link href="/products/thermodrain_chamber_cover" onClick={closeMenu}>THERMODRAIN Chambers</Link></li>
              <li><Link href="/products/thermodrain_lifting_cover" onClick={closeMenu}>THERMODRAIN Lifting Accessories</Link></li>
            </ul>
          </li>

          <li><Link href="/industries-served" onClick={closeMenu}>Industries Served</Link></li>
          <li><Link href="/comparative-chart" onClick={closeMenu}> Features Comparision</Link></li>
          <li><Link href="/load-testing" onClick={closeMenu}> Load Testing</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
