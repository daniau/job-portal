import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

const PoppinsSans = Poppins({
  weight: ["300","400", "500", "700","800"],
  variable: "--font-poppins-var",
  subsets: ["latin"],
  display: "swap", // أضف هذا السطر
  preload:false

});



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
      className={`h-full antialiased ${PoppinsSans.variable}`}

    >
    
      <body className="min-h-screen flex flex-1 flex-col ">
      <Navbar />
     <main className="  flex-1 ">
      {children}
      </main>
        <Footer />
        </body>
    </html>
  );
}
