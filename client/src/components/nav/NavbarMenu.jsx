// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../../css/NavbarMenu.css";

// function NavbarMenu({ menuOpen, setMenuOpen }) {
//   const [shareOpen, setShareOpen] = useState(false);

//   const handleShare = () => setShareOpen(!shareOpen);

//   return (
//     <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
//       {/* כפתור סגירה */}
//       <button className="menu-close" onClick={() => setMenuOpen(false)}>×</button>

//       {/* לינקים */}
//       <div className="menu-links">
//         <Link to="/" onClick={() => setMenuOpen(false)}>דף הבית</Link>
//         <Link to="/about" onClick={() => setMenuOpen(false)}>אודות</Link>
//         <Link to="/products" onClick={() => setMenuOpen(false)}>מוצרים</Link>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>צור קשר</Link>
//       </div>

//       {/* כפתור שיתוף */}
//       <div className="menu-share">
//         <button onClick={handleShare}>שתף</button>
//         {shareOpen && (
//           <div className="share-options">
//             <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
//             <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
//             <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">Twitter</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavbarMenu;




import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/NavbarMenu.css";

function NavbarMenu({ menuOpen, setMenuOpen }) {
  const [shareOpen, setShareOpen] = useState(false);
  const handleShare = () => setShareOpen(!shareOpen);

  return (
    <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
      <button className="menu-close" onClick={() => setMenuOpen(false)}>×</button>

      {/* לינקים מלמעלה למטה */}
      <div className="menu-links-vertical">
        <Link to="/" onClick={() => setMenuOpen(false)}> Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Appartment</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}> Contact</Link>
      </div>

      {/* לינקים בגריד */}
      <div className="menu-links-grid">
        <Link to="/" onClick={() => setMenuOpen(false)}> HOME</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>APPARTMENT</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}> CONTACT</Link>
      </div>

      {/* כפתור שיתוף */}
      <div className="menu-share">
        <button onClick={handleShare}>SHARE</button>
        {shareOpen && (
          <div className="share-options">
            <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
            <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMenu;
