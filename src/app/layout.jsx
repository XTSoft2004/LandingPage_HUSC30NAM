"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/config.css";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";

import ScrollToTop from "@/components/UI/ScrollToTop";
import Loading from "@/components/UI/Loading";
import Section from "@/components/Layout/Section";
import { useEffect } from "react";
import Head from "next/head"; // Import Head from Next.js

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        <meta
          name="description"
          content="Chào mừng kỷ niệm 30 năm thành lập Khoa Công nghệ Thông tin, Trường Đại học Khoa học - Đại học Huế"
        />
        <meta
          name="keywords"
          content="Kỷ niệm 30 năm, Khoa Công nghệ Thông tin, Đại học Khoa học, Đại học Huế, anniversary"
        />
        <meta
          name="author"
          content="Khoa Công nghệ Thông tin, Trường Đại học Khoa học, Đại học Huế"
        />
        <meta
          property="og:title"
          content="Kỷ niệm 30 năm Khoa Công nghệ Thông tin - Trường Đại học Khoa học"
        />
        <meta
          property="og:description"
          content="Cùng nhau nhìn lại hành trình 30 năm phát triển của Khoa CNTT, Trường Đại học Khoa học, Đại học Huế."
        />
        <meta property="og:image" content="/images/logo/logo.png" />{" "}
        {/* Đảm bảo thêm một đường dẫn ảnh cho Open Graph */}
        <meta property="og:url" content="https://it.husc.edu.vn/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kỷ niệm 30 năm Khoa Công nghệ Thông tin - Trường Đại học Khoa học"
        />
        <meta
          name="twitter:description"
          content="Cùng nhau nhìn lại hành trình 30 năm phát triển của Khoa CNTT, Trường Đại học Khoa học, Đại học Huế."
        />
        <meta name="twitter:image" content="/images/logo/logo.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>IT HUSC - 30 years anniversary</title>
      </Head>
      <body>
        {children}
        <ScrollToTop />
        <Loading />
      </body>
    </html>
  );
}
