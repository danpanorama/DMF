import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";

function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
<Route path="/product/:id" element={<ProductPage />} />
    
    </Routes>
  );
}

export default NavRoutes;
