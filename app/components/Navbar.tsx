"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div
        className={`${styles.overlay} ${menuActive ? styles.show : ""}`}
        onClick={closeMenu}
      ></div>

      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo_2.png"
            alt="Logo"
            width={150}
            height={50}
            priority
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

          {/* PRODUCTS DROPDOWN */}
          <li>
            <a href="/product_page" onClick={toggleDropdown}>
              Products <span className={styles.arrow}>▼</span>
            </a>
           <ul className={styles.dropdownMenu}>
  {/* Show "All Products" only on mobile */}
  <li className={styles.allProductsMobile}>
    <Link href="/product_page" onClick={closeMenu}>All Products</Link>
  </li>

  <li><Link href="/products/thermodrain_solid_top" onClick={closeMenu}>Solid top manhole covers with frame</Link></li>
  <li><Link href="/products/thermodrain_multi_cover" onClick={closeMenu}>Multiple covers with frame</Link></li>
  <li><Link href="/products/thermodrain_recess" onClick={closeMenu}>Recess manhole cover sizes</Link></li>
  <li><Link href="/products/thermodrain_air_cover" onClick={closeMenu}>Air and watertight covers with frame</Link></li>
  <li><Link href="/products/thermodrain_gratings" onClick={closeMenu}>Gratings</Link></li>
  <li><Link href="/products/thermodrain_water_cover" onClick={closeMenu}>Water Gully Covers</Link></li>
  <li><Link href="/products/thermodrain_frp_grp_cover" onClick={closeMenu}>Drain channels with grating/gully cover</Link></li>
  <li><Link href="/products/thermodrain_tree_cover" onClick={closeMenu}>Tree Gratings</Link></li>
  <li><Link href="/products/thermodrain_angle_cover" onClick={closeMenu}>L Angle</Link></li>
  <li><Link href="/products/thermodrain_hinged_cover" onClick={closeMenu}>Hinged Overhead And U.G. Water Tank Covers</Link></li>
  <li><Link href="/products/thermodrain_chamber_cover" onClick={closeMenu}>Chambers</Link></li>
  <li><Link href="/products/thermodrain_lifting_cover" onClick={closeMenu}>Lifting Accessories</Link></li>
</ul>

          </li>

          {/* NEW BROCHURE SECTION */}
          <li>
            <a href="#" onClick={toggleDropdown}>
              Brochure <span className={styles.arrow}>▼</span>
            </a>
            <ul className={styles.dropdownMenu}>
              <li>
                <a
                  href="/pdfs/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  View Brochure (PDF)
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/Brochure.pdf"
                  download
                  onClick={closeMenu}
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </li>

          <li><Link href="/industries-served" onClick={closeMenu}>Industries Served</Link></li>
          <li><Link href="/comparative-chart" onClick={closeMenu}>Features Comparison</Link></li>
          <li><Link href="/load-testing" onClick={closeMenu}>Load Testing</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
