import "../../../css/productPage.css";
function ProductDescription({ description, detailedDescription }) {
  return (
    <div className="pp-description-block">
      <p className="pp-description">{description}</p>
      {detailedDescription && <p className="pp-detailed">{detailedDescription}</p>}
    </div>
  );
}

export default ProductDescription;
