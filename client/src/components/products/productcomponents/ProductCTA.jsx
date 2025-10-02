import "../../../css/productPage.css";
function ProductCTA({ onContact, onSchedule, onWhatsapp }) {
  return (
    <div className="pp-cta">
      <button className="pp-btn" onClick={onContact}>Contact Agent</button>
      <button className="pp-btn" onClick={onSchedule}>Schedule a Visit</button>
      <button className="pp-btn" onClick={onWhatsapp}>Whatsapp</button>
    </div>
  );
}

export default ProductCTA;
