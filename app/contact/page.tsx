"use client";
import styles from "./contact.module.css";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! We will contact you shortly.");
  };

  return (
    <div className={styles.contactPage}>
      {/* HERO */}
   <section className={styles.hero}>
  <div className={styles.heroContent}>
    <div className={styles.heroText}>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you. Reach out for quotes, inquiries, or 
        project consultation. Our team is ready to assist you!
      </p>
    </div>
    <div className={styles.heroImage}>
      <img src="/icons/contact.jpg" alt="Contact Us" />
    </div>
  </div>
</section>



      {/* CONTACT FORM + INFO */}
  <section className={styles.contactFormSection}>
  <div className={styles.container}>
    {/* LEFT SIDE — FORM */}
    <div className={styles.formWrapper}>
      <h2>Get In Touch!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Name" required />
     <textarea placeholder="Message" required></textarea>

        <button type="submit">Submit Button</button>
      </form>
    </div>

    {/* RIGHT SIDE — MAP + INFO + SOCIAL */}
    <div className={styles.infoWrapper}>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
        nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.834200123!2d73.85625511511214!3d18.520430387402047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c092f0b12345%3A0xabcdef1234567890!2s123%20Industrial%20Road%2C%20Pune!5e0!3m2!1sen!2sin!4v1697369420000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


    </div>
  </div>
</section>

    </div>
  );
}
