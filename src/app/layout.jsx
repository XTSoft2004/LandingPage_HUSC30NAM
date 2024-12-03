"use client";
// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/config.css";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";

import ScrollToTop from "@/components/UI/ScrollToTop";
import Loading from "@/components/UI/Loading";
import Section from "@/components/Layout/Section";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        {children}
        <ScrollToTop />
        <Loading />
      </body>
    </html>
  );
}
