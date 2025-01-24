import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Son Qiymət",  
  description: "Son Qiymət - Aktiv Telefon satışı platforması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[950px] mx-auto">
          <Navbar />
          {/* <CategoryNavbar /> */}
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html >
  );
}
