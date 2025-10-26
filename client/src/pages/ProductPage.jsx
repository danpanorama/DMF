
// import { useParams } from "react-router-dom";
// import { products } from "../database/productData";

// // קומפוננטות
// import Breadcrumbs from "../components/products/productcomponents/Breadcrumbs";
// import ProductGalleryEnhanced from "../components/products/productcomponents/ProductGalleryEnhanced";
// import ProductIconsEnhanced from "../components/products/productcomponents/ProductIconsEnhanced";
// import ProductFeatures from "../components/products/productcomponents/ProductFeatures";
// import ProductDescription from "../components/products/productcomponents/ProductDescription";
// import ProductCTA from "../components/products/productcomponents/ProductCTA";
// import ProductMap from "../components/products/ProductMap";
// import ContactForm from "../components/products/productcomponents/ContactForm";
// import Reviews from "../components/products/productcomponents/Reviews";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchReviews } from "../redux/actions/reviewsActions";
// import ScheduleModal from "../components/products/productcomponents/ScheduleModal";

// function ProductPage() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));
//   const [isScheduleOpen, setIsScheduleOpen] = useState(false);
//   if (!product) return <p>Product not found</p>;

//   // דוגמה ל־breadcrumbs
//   const breadcrumbs = [
//     { name: "Home", link: "/" },
//     { name: product.location, link: `/city/${product.location}` },
//     { name: product.name, link: `/product/${product.id}` }
//   ];

//   // דוגמה ל־features
//   const featuresList = product.features || [
//     "Renovated kitchen",
//     "Wooden floors",
//     "Air conditioning",
//     "Balcony with sea view"
//   ];


// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(fetchReviews(product.id));
// }, [dispatch, product.id]);




//   const handleContact = () => {
//   const phoneNumber = "+972534273529"; // המספר שלך
//   window.open(`https://wa.me/${phoneNumber}`, "_blank");
// };
    
    
  
//   const handleWhatsapp = () => {
//   const phoneNumber = "+972534273529"; // המספר שלך
//   window.open(`https://wa.me/${phoneNumber}`, "_blank");
// };

//  const handleSchedule = () => setIsScheduleOpen(true);
//   const handleCloseSchedule = () => setIsScheduleOpen(false);

//   const handleConfirmSchedule = (schedule) => {
//     console.log("Scheduled visit:", schedule);
//     // אפשר פה להוסיף הודעת הצלחה, למשל Toast או Alert
//   };

//   return (
//     <div className="productPageContainer">

// <div className="spaceNav"></div>
//       {/* גלריה */}
//       <ProductGalleryEnhanced images={product.images} name={product.name} />
//       {/* Breadcrumbs */}
//       <Breadcrumbs path={breadcrumbs} />
//       <div className="productPageSpace">
//         {/* שם ותיאור קצר */}
//         <h1 className="productPageName">{product.name}</h1>
//         <p className="productPageInfo">{product.description}</p>

//         {/* שורת אייקונים מורחבת */}
//         <ProductIconsEnhanced
//           rooms={product.rooms}
//           bathrooms={product.bathrooms}
//           floor={product.floor}
//           size={product.size}
//           balcony={product.balcony}
//           parking={product.parking}
//           elevator={product.elevator}
//           condition={product.condition}
//         />

//         {/* Features List */}
//         <ProductFeatures features={featuresList} />

//         {/* תיאור מפורט */}
//         <ProductDescription
//           description={product.businessPotential}
//           detailedDescription={product.detailedDescription}
//         />

//         {/* CTA */}
//         <ProductCTA
//           onContact={handleContact}
//           onSchedule={handleSchedule}
//           onWhatsapp={handleWhatsapp}
//         />
// <ScheduleModal
//   isOpen={isScheduleOpen}
//   onClose={handleCloseSchedule}
//   productId={product.id}
//   onConfirm={handleConfirmSchedule}
// />
//         {/* מפה */}
//         <ProductMap address={product.address} />

//         {/* טופס צור קשר */}
//         <ContactForm />

//         {/* Reviews */}
//         <Reviews productId={product.id}  />
//       </div>
//     </div>
//   );
// }

// export default ProductPage;




import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../config/axiosConfig";
import { useDispatch, useSelector } from "react-redux";

// קומפוננטות
import Breadcrumbs from "../components/products/productcomponents/Breadcrumbs";
import ProductGalleryEnhanced from "../components/products/productcomponents/ProductGalleryEnhanced";
import ProductIconsEnhanced from "../components/products/productcomponents/ProductIconsEnhanced";
import ProductFeatures from "../components/products/productcomponents/ProductFeatures";
import ProductDescription from "../components/products/productcomponents/ProductDescription";
import ProductCTA from "../components/products/productcomponents/ProductCTA";
import ProductMap from "../components/products/ProductMap";
import ContactForm from "../components/products/productcomponents/ContactForm";
import Reviews from "../components/products/productcomponents/Reviews";
import ScheduleModal from "../components/products/productcomponents/ScheduleModal";
import { showLoader,hideLoader} from "../redux/actions/loaderActions";
import { fetchWithPropertyReviews} from "../redux/actions/reviewsActions";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState(null);

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {

      dispatch(showLoader());
      try {
        const { data } = await api.get(`/properties/${id}`);
       console.log(data)
        setProduct(data.data);

dispatch(fetchWithPropertyReviews(data.reviews))
        
      } catch (error) {
        console.error("Failed to fetch product:", error.message);
      }
       finally {
      dispatch(hideLoader());
    }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: product.location, link: `/city/${product.location}` },
    { name: product.name, link: `/product/${product._id}` }
  ];

  const featuresList = product.features || [
    "Renovated kitchen",
    "Wooden floors",
    "Air conditioning",
    "Balcony with sea view"
  ];

  const handleContact = () => {
    const phoneNumber = "+972534273529";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleWhatsapp = handleContact;
  const handleSchedule = () => setIsScheduleOpen(true);
  const handleCloseSchedule = () => setIsScheduleOpen(false);
  const handleConfirmSchedule = (schedule) => console.log("Scheduled visit:", schedule);

  return (
    <div className="productPageContainer">
      <div className="spaceNav"></div>
      <ProductGalleryEnhanced images={product.images} name={product.name} />
      <Breadcrumbs path={breadcrumbs} />
      <div className="productPageSpace">
        <h1 className="productPageName">{product.name}</h1>
        <p className="productPageInfo">{product.description}</p>

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

        <ProductFeatures features={featuresList} />

        <ProductDescription
          description={product.businessPotential}
          detailedDescription={product.detailedDescription}
        />

        <ProductCTA
          onContact={handleContact}
          onSchedule={handleSchedule}
          onWhatsapp={handleWhatsapp}
        />

        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={handleCloseSchedule}
          productId={product._id}
          onConfirm={handleConfirmSchedule}
        />

        <ProductMap address={product.address} />
        <ContactForm />
        <Reviews reviews={reviews} productId={product._id} />
      </div>
    </div>
  );
}

export default ProductPage;
