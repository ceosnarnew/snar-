import "./globals.css";

export const metadata = {
  title: "SNAR — Ignite Your Edge",
  description: "Premium sportswear engineered for performance. Designed for champions.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
