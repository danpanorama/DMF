import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import NavRoutes from "./components/nav/NavRoutes";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/utils/ScrollToTp";

function App() {
  return (
    <Router>
      <Navbar />
       <ScrollToTop />
      <NavRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
