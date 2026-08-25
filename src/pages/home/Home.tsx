import HeroSection from "@/pages/home/components/HeroSection";
import { Suspense } from "react";
import PopularCategories from "@/pages/home/components/PopularCategories";
import FeaturedJob from "./components/FeaturedJob";

export default function HomePageComponent() {
  return (<>
  <HeroSection /> 
  
  <PopularCategories />
  <FeaturedJob />
  </>);
}
