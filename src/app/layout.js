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
import ChatBot from "@/components/ui/chat-bot";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
