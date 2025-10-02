import AboutUs from "../components/about/AboutUs";
import CTASection from "../components/contact/CTASection";
import HeroHeader from "../components/headers/HeroHeader";
import WayThessaloniki from "../components/headers/WayThessaloniki";
import HeroSection from "../components/home/HeroSection";
import CircleLogo from "../components/logos/CircleLogo";
import ProductList from "../components/products/ProductList";
import ReviewsSection from "../components/reviews/ReviewsSection";

function Home() {
  return (
    <div >
      <HeroSection/>
      <CircleLogo/>
    <div className="HomeContainer">
        <HeroHeader/>
        <ProductList/>
        <br />

        <WayThessaloniki/>
    <AboutUs/>
        <CTASection/>
        <ReviewsSection/>
    </div>
   
    </div>
  );
}

export default Home;
