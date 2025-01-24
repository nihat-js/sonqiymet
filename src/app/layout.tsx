import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import { Providers } from "@/providers/providers";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet"></link>
      </head>
      <Providers>
        <body className="" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
          <div className="max-w-[1000px] mx-auto ">
            <Navbar />
            {/* <CategoryNavbar /> */}
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </Providers>
    </html >
  );
}
