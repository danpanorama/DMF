function ProductMap({ address }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className="productLocationMap">
      <iframe
        src={mapUrl}
        width="300"
        height="150"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ProductMap;
