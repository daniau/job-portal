import HomePageComponent from "@/features/home/Home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Page - job Portal",
  description: "Home Page - Find your dream job here job Portal",
  keywords: ["job", "portal", "home", "page"],
  authors: [{ name: "job Portal", url: "https://jobportal.com" }],
  robots: {
    index: true,
    follow: true,
  },
  
};
export default function Home() {
  return (<> 
  <HomePageComponent /> 
  </>);
}
