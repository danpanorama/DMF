import "../../../css/productPage.css";
// אייקונים מ-react-icons/fa6 או fa לפי מה שקיים אצלך
import { 
  FaBed, 
  FaBath, 
  FaRulerCombined, 
  FaBuilding, 
  FaHouse, 
  FaUmbrellaBeach, 
  FaCar, 
  FaElevator 
} from "react-icons/fa6"; // או "react-icons/fa" אם אתה משתמש ב-fa5

function ProductIconsEnhanced({ rooms, bathrooms, floor, size, balcony, parking, elevator, condition }) {
  return (
    <div className="pp-icons">
      <div className="pp-icon-item"><FaBed /> {rooms} Bedrooms</div>
      <div className="pp-icon-item"><FaBath /> {bathrooms} Bathrooms</div>
      <div className="pp-icon-item"><FaBuilding /> Floor {floor}</div>
      <div className="pp-icon-item"><FaRulerCombined /> {size} m²</div>
      {balcony && <div className="pp-icon-item"><FaUmbrellaBeach /> Balcony</div>}
      {parking && <div className="pp-icon-item"><FaCar /> Parking</div>}
      {elevator && <div className="pp-icon-item"><FaElevator /> Elevator</div>}
      {condition && <div className="pp-icon-item"><FaHouse /> {condition}</div>}
    </div>
  );
}

export default ProductIconsEnhanced;
