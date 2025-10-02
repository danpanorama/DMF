import { FaBed, FaBath, FaRulerCombined, FaBuilding } from "react-icons/fa";

function ProductIcons({ rooms, bathrooms, floor, size }) {
  return (
    <div className="productPageIcons">
      <div className="iconItem"><FaBed /> {rooms} Bedrooms</div>
      <div className="iconItem"><FaBath /> {bathrooms} Bathrooms</div>
      <div className="iconItem"><FaBuilding /> Floor {floor}</div>
      <div className="iconItem"><FaRulerCombined /> {size} m²</div>
    </div>
  );
}

export default ProductIcons;
