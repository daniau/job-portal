import HeroSection from "@/features/home/components/HeroSection";
import PopularCategories from "@/features/home/components/PopularCategories";
import FeaturedJob from "./components/FeaturedJob";

export default function HomePageComponent() {
  return (<>
  <HeroSection /> 
  
  <PopularCategories />
  <FeaturedJob />
  </>);
}
