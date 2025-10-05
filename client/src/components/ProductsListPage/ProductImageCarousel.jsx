// /ProductsListPage/ProductImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function ProductImageCarousel({ images, alt }) {
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      navigation
      spaceBetween={10}
      slidesPerView={2.5}
      freeMode={true}
      className="productCarousel"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={alt}
            style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductImageCarousel;
