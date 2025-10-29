// app/contact/page.tsx
import { Suspense } from "react";
import ContactFormClient from "./ContactFormClient";

export const dynamic = "force-dynamic"; // ✅ prevents static generation errors

export default function ContactPage() {
  return (
    <Suspense fallback={<p>Loading contact form...</p>}>
      <ContactFormClient />
    </Suspense>
  );
}
