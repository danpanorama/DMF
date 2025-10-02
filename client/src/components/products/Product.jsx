
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // ייבוא נכון למודולים בגרסה החדשה
// import { Navigation, Pagination } from "swiper/modules";

// function Product({ images, name, description, location }) {
//   return (
//     <div className="productContainer">
//       <div className="imageSectionProduct">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={10}
//           slidesPerView={1}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img src={img} alt={name} className="img" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="info">
//         <p className="productName">{name}</p>
//       </div>
//     </div>
//   );
// }

// export default Product;


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Product({ id, images, name, description, location }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // שולח לדף מוצר עם id כפרמטר
    navigate(`/product/${id}`);
  };

  return (
    <div className="productContainer" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="imageSectionProduct">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={name} className="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="info">
        <p className="productName">{name}</p>
      </div>
    </div>
  );
}

export default Product;
