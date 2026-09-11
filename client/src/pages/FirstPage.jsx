// import React from 'react';
// import HeroSectionFirstPage from '../components/firstPage/HeroSectionFirstPage';
// import AboutUs from "../components/about/AboutUs";
// import CTASection from "../components/contact/CTASection";
// import HeroHeader from "../components/headers/HeroHeader";
// import WayThessaloniki from "../components/headers/WayThessaloniki";
// import CircleLogo from "../components/logos/CircleLogo";
// import ProductList from "../components/products/ProductList";
// import ReviewsSection from "../components/reviews/ReviewsSection";
// function FirstPage() {
//   return (
//     <div >
//     <HeroSectionFirstPage />

//   <CircleLogo/>
//     <div className="HomeContainer">
  
//     </div>

//     </div>
//   );
// }

// export default FirstPage;
import HeroSectionFirstPage from "../components/firstPage/HeroSectionFirstPage";
import MarketSelector from "../components/firstPage/MarketSelector";
import AboutDeveloper from "../components/firstPage/AboutDeveloper";
import "../css/firstPage.css";

function FirstPage() {
  return (
    <main className="firstPage">
      <HeroSectionFirstPage />
      <MarketSelector />
      <AboutDeveloper />
    </main>
  );
}

export default FirstPage;