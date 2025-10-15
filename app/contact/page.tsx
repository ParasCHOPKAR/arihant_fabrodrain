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
  <h1>Contact Us</h1>
  <p>
    We would love to hear from you. Reach out for quotes, inquiries, or 
    project consultation. Our team is ready to assist you!
  </p>
</section>


      {/* CONTACT FORM + INFO */}
      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          {/* FORM */}
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your Email" required />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="Your Phone" />
            </label>
            <label>
              Message
              <textarea placeholder="Your Message" required></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>

          {/* CONTACT INFO + MAP */}
          <div className={styles.contactInfo}>
            <h2>Our Contact Info</h2>
            <p><strong>Email:</strong> info@arihantindustries.com</p>
            <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
            <p><strong>Address:</strong> 123 Industrial Road, Pune, India</p>

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
