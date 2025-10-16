"use client";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 1100,
      }}
    >
      {/* Phone Button */}
      <a
        href="tel:+919637819378"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f58220",
          fontSize: "24px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          background: "#fff",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
        }
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919637819378"
        target="_blank"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "24px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          background: "#25D366",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
        }
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
