import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import ProductsListPage from "../../pages/ProductsListPage";

function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
<Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsListPage />} />

    </Routes>
  );
}

export default NavRoutes;
