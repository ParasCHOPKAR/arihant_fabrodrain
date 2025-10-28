"use client";

import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! We will contact you shortly.");
  };

  return (
    <div className={styles.contactPage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you. Reach out for quotes, inquiries, or 
              project consultation. Our team is ready to assist you!
            </p>
          </div>
          <div className={styles.heroImage} style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/icons/contact.jpg"
              alt="Contact Us"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          {/* LEFT SIDE — FORM */}
          <div className={styles.formWrapper}>
            <p>
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input type="text" placeholder="First Name" required />
              <input type="email" placeholder="Email" required />
              <input
                type="tel"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
              />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* RIGHT SIDE — GET IN TOUCH INFO */}
          <div className={styles.infoWrapper}>
            <h2>Get In Touch</h2>
            <div className={styles.getInTouchCard}>
              <p><strong>Phone:</strong> +91 9637819378</p>
     
              <p><strong>Email:</strong> krunal3399@gmail.com</p>
              <p><strong>Address:</strong> Shop no. 120+121, 1st Floor, Ultima Business Centre</p>
            </div>
          </div>
        </div>

        {/* MAP BELOW FORM */}     
        <div className={styles.mapWrapperBelow}>
          <h2 className={styles.mapHeading}>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.4881389195765!2d73.8780771!3d18.4585846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebefbdeffd67%3A0x41563099a603bb11!2sUltima%20Business%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
