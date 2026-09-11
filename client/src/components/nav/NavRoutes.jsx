import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import NotFound from "../../pages/NotFound";
import ProductPage from "../../pages/ProductPage";
import ProductsListPage from "../../pages/ProductsListPage";
import ContactPage from "../../pages/ContactPage";
import FirstPage from "../../pages/FirstPage";
import IsraelPage from "../../pages/IsraelPage";
import JaffaUrbanRenewalPage from "../../pages/JaffaUrbanRenewalPage";

function NavRoutes() {
  return (
    <Routes>
<Route path="/" element={<FirstPage />} />
      <Route path="/greece" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
<Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/israel" element={<IsraelPage />} />
          <Route
  path="/israel/jaffa-urban-renewal-7024"
  element={<JaffaUrbanRenewalPage />}
/>

    </Routes>
  );
}

export default NavRoutes;
