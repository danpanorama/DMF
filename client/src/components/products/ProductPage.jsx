// import { useParams } from "react-router-dom";
// import { products } from "../../database/productData";
// import ProductGallery from "./ProductGallery";
// import ProductMap from "./ProductMap";
// import ProductIcons from "./ProductIcons";

// function ProductPage() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="productPageContainer">
//       <ProductGallery images={product.images} name={product.name} />

//       <div className="productPageSpace">
//         <h1 className="productPageName">{product.name}</h1>
//         <p className="productPageInfo">{product.description}</p>
//      <ProductIcons
//           rooms={product.rooms}
//           bathrooms={product.bathrooms}
//           floor={product.floor}
//           size={product.size}
//         />
//         <ProductMap address={product.address} />

   
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
import { useParams } from "react-router-dom";
import { products } from "../../database/productData";

// קומפוננטות
import Breadcrumbs from "./productcomponents/Breadcrumbs";
import ProductGalleryEnhanced from "./productcomponents/ProductGalleryEnhanced";
import ProductIconsEnhanced from "./productcomponents/ProductIconsEnhanced";
import ProductFeatures from "./productcomponents/ProductFeatures";
import ProductDescription from "./productcomponents/ProductDescription";
import ProductCTA from "./productcomponents/ProductCTA";
import ProductMap from "./ProductMap";
import ContactForm from "./productcomponents/ContactForm";
import Reviews from "./productcomponents/Reviews";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  // דוגמה ל־breadcrumbs
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: product.location, link: `/city/${product.location}` },
    { name: product.name, link: `/product/${product.id}` }
  ];

  // דוגמה ל־features
  const featuresList = product.features || [
    "Renovated kitchen",
    "Wooden floors",
    "Air conditioning",
    "Balcony with sea view"
  ];

  // דוגמה ל־reviews
  const reviewsList = product.reviews || [
    { user: "Alice", rating: 5, comment: "Great location and modern apartment!" },
    { user: "Bob", rating: 4, comment: "Spacious rooms, very clean." }
  ];

  const handleContact = () => alert("Contact Agent clicked");
  const handleSchedule = () => alert("Schedule Visit clicked");
  const handleWhatsapp = () => alert("Whatsapp clicked");

  return (
    <div className="productPageContainer">


      {/* גלריה */}
      <ProductGalleryEnhanced images={product.images} name={product.name} />
      {/* Breadcrumbs */}
      <Breadcrumbs path={breadcrumbs} />
      <div className="productPageSpace">
        {/* שם ותיאור קצר */}
        <h1 className="productPageName">{product.name}</h1>
        <p className="productPageInfo">{product.description}</p>

        {/* שורת אייקונים מורחבת */}
        <ProductIconsEnhanced
          rooms={product.rooms}
          bathrooms={product.bathrooms}
          floor={product.floor}
          size={product.size}
          balcony={product.balcony}
          parking={product.parking}
          elevator={product.elevator}
          condition={product.condition}
        />

        {/* Features List */}
        <ProductFeatures features={featuresList} />

        {/* תיאור מפורט */}
        <ProductDescription
          description={product.businessPotential}
          detailedDescription={product.detailedDescription}
        />

        {/* CTA */}
        <ProductCTA
          onContact={handleContact}
          onSchedule={handleSchedule}
          onWhatsapp={handleWhatsapp}
        />

        {/* מפה */}
        <ProductMap address={product.address} />

        {/* טופס צור קשר */}
        <ContactForm />

        {/* Reviews */}
        <Reviews reviews={reviewsList} />
      </div>
    </div>
  );
}

export default ProductPage;
