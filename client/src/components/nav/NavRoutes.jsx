import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import ProductsListPage from "../../pages/ProductsListPage";
import ContactPage from "../../pages/ContactPage";

function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
<Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
}

export default NavRoutes;
