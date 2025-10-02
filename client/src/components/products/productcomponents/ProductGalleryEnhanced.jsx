import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "../../../css/productPage.css";
function ProductGalleryEnhanced({ images, name }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="pp-gallery">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={name} className="pp-gallery-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress
        className="pp-gallery-thumbs"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={name} className="pp-gallery-thumb" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductGalleryEnhanced;
