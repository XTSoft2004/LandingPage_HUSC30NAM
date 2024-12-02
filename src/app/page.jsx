"use client";
import { useState, useRef, useEffect } from "react";
import IndexPage from "./(pages)/home/IndexPage";
import Sec2 from "./(pages)/home/sec2";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import NavbarFake from "@/components/Layout/NavbarFake";
import { useInView } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState(""); // Trạng thái section hiện tại
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inref1 = useInView(ref1, { once: false });
  const inref2 = useInView(ref2, { once: false });
  const inref3 = useInView(ref3, { once: false });

  useEffect(() => {
    if (inref1) {
      setActiveSection("tong-quan");
    }
    if (inref2) {
      setActiveSection("cac-moc-lich-su");
    }
    if (inref3) {
      setActiveSection("lich-trinh");
    }
    console.log(activeSection);
  }, [inref1, inref2, inref3]);

  return (
    <>
      {/* <Navbar/>
      <Sec2 name="sec2" />
      <IndexPage />
      <Footer /> */}
      {/* Truyền activeSection vào Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Các section truyền setActiveSection để cập nhật */}
      <section ref={ref1}>
        <Sec2 />
      </section>
      <section ref={ref2}>
        <IndexPage />
      </section>
      <Footer />
    </>
  );
}
