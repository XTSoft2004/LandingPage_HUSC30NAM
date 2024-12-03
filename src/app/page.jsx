"use client";
import { useState, useRef, useEffect } from "react";
import IndexPage from "./(pages)/home/IndexPage";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import NavbarFake from "@/components/Layout/NavbarFake";
import { useInView } from "framer-motion";
import Sec1 from "./(pages)/home/Sec1";
import Sec2 from "./(pages)/home/Sec2";
import Sec3 from "./(pages)/home/Sec3";
import Sec4 from "./(pages)/home/Sec4";
import Sec5 from "./(pages)/home/Sec5";

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
      setActiveSection(String("tong-quan"));
    }
    if (inref2) {
      setActiveSection(String("cac-moc-lich-su"));
    }
    if (inref3) {
      setActiveSection(String("lich-trinh"));
    }
    // console.log(activeSection);
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
      <section className="bg-sec1">
        <Sec1 />
        <section ref={ref1}>
          <Sec2 />
        </section>
      </section>
      <Sec3 />
      <section ref={ref2}>
        <Sec4 />
      </section>
      <section ref={ref3}>
        <Sec5 />
      </section>
      <Footer />
    </>
  );
}
