import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/config.css";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ScrollToTop from "@/components/UI/ScrollToTop";
import Loading from "@/components/UI/Loading";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
        <Loading />
        <Footer />
      </body>
    </html>
  );
}
