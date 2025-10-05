import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductIconsEnhanced from "../products/productcomponents/ProductIconsEnhanced";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images, name, description, rooms, bathrooms, floor, size, balcony, parking, elevator, condition, id } = product;

  return (
    <div
      className="plp-product-row"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="plp-product-image">
        {images.length > 1 ? (
          <>
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              navigation
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              slidesPerView={1}
              className="plp-product-main-carousel"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={name} className="plp-product-main-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress
              className="plp-product-thumbs"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={name} className="plp-product-thumb-img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <img src={images[0]} alt={name} className="plp-product-main-img" />
        )}
      </div>

      <div className="plp-product-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <ProductIconsEnhanced
          rooms={rooms}
          bathrooms={bathrooms}
          floor={floor}
          size={size}
          balcony={balcony}
          parking={parking}
          elevator={elevator}
          condition={condition}
        />
      </div>
    </div>
  );
}

export default ProductCard;
