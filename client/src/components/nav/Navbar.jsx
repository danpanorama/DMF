// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "../../CSS/NAV.css";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <div className="logo">LOGO</div>

//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         <div className={`menu ${menuOpen ? "active" : ""}`}>
//          <button className="exitButton" onClick={() => setMenuOpen(!menuOpen)} >X</button>
         
//           <Link to="/" onClick={() => setMenuOpen(false)}>דף הבית</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>אודות</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






import { useState, useEffect } from "react";
import CircleLogo from "../logos/CircleLogo";
import NavbarMenu from "./NavbarMenu";
import "../../css/nav.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <p className="logo">
             DMF
          </p>
       
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      <NavbarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;
