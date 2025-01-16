import { Swiper, SwiperSlide } from "swiper/react";

// importing the images
import versace from "../../assets/versace-logo.png";
import zara from "../../assets/zara-logo.png";
import calvin_klein from "../../assets/calvin-klein-logo.png";
import gucci from "../../assets/gucci-logo-1 1.png";
import prada from "../../assets/prada-logo-1 1.png";

const Brands = () => {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <img src={versace} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zara} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={calvin_klein} alt="" />
        </SwiperSlide>
      </Swiper>
      ;
      <Swiper spaceBetween={50}>
        <SwiperSlide>
          <img src={gucci} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prada} alt="" />
        </SwiperSlide>
      </Swiper>
      ;
    </>
  );
};

export default Brands;
