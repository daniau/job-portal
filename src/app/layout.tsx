import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "job Portal",
  description: "job Portal",
};
interface IRootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({
  children,
}: Readonly<IRootLayoutProps>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`h-full antialiased`}

    >
    
      <body className="min-h-full flex flex-col">
      <Navbar />
     <main className="  h-full">
      {children}
      </main>
        <Footer />
        </body>
    </html>
  );
}
