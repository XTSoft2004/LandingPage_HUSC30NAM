import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/config.css";

import Home from "./Home.jsx";

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body>
                <Home />
            </body>
        </html>
    );
}