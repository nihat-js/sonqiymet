import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import { Providers } from "@/providers/providers";
import useGlobalStore from "@/stores/globalStore";
import StoreProvider from "@/providers/StoreProvider";

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

export default function RootLayout({ children, }) {

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.jpg",
  }

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="relative" style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        // background : "black"
        backgroundColor: "#f3f4f5"
      }}>
        <StoreProvider user={user}>

          <div className="max-w-[1000px] mx-auto">
            <Navbar />
            {/* <CategoryNavbar /> */}
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
