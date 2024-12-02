"use client";
import IndexPage from "./(pages)/home/IndexPage";
import Sec2 from "./(pages)/home/sec2";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sec2 name="Sec2" />
      <IndexPage />
      <Footer />
    </>
  );
}
