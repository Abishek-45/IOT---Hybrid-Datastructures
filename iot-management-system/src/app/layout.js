import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IoT device management system",
  description: "An application for controlling and managing IoT devices. Uses a single data structure for the functioning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className}>{children}</body>
    </html>
  );
}
