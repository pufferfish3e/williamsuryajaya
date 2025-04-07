import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400","500","600","700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
