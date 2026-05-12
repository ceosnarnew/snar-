import "./globals.css";

export const metadata = {
  title: "SNAR — Ignite Your Edge",
  description: "Premium sportswear engineered for performance. Designed for champions.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
