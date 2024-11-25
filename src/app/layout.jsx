import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/config.css";

import ScrollToTop from "@/components/UI/ScrollToTop";

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}