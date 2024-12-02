// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/config.css";

import ScrollToTop from "@/components/UI/ScrollToTop";
import Loading from "@/components/UI/Loading";
import Section from "@/components/Layout/Section";

export default function RootLayout({ children }) {
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
