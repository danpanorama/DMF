import "../../../css/productPage.css";
function ProductFeatures({ features }) {
  return (
    <ul className="pp-features">
      {features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

export default ProductFeatures;
