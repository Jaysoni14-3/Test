import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

import ClientImage1 from "../assets/Clients/Clients-01.png";
import ClientImage2 from "../assets/Clients/Clients-02.png";
import ClientImage3 from "../assets/Clients/Clients-03.png";
import ClientImage4 from "../assets/Clients/Clients-04.png";
import ClientImage5 from "../assets/Clients/Clients-05.png";
import ClientImage6 from "../assets/Clients/Clients-06.png";
import ClientImage7 from "../assets/Clients/Clients-07.png";
import ClientImage8 from "../assets/Clients/Clients-08.png";
import ClientImage9 from "../assets/Clients/Clients-09.png";
import ClientImage10 from "../assets/Clients/Clients-10.png";
import ClientImage11 from "../assets/Clients/Clients-11.png";
import ClientImage12 from "../assets/Clients/Clients-12.png";
import ClientImage13 from "../assets/Clients/Clients-13.png";
import ClientImage14 from "../assets/Clients/Clients-14.png";
import ClientImage15 from "../assets/Clients/Clients-15.png";
import ClientImage16 from "../assets/Clients/Clients-16.png";
import ClientImage17 from "../assets/Clients/Clients-17.png";
import ClientImage18 from "../assets/Clients/Clients-18.png";
import ClientImage19 from "../assets/Clients/Clients-19.png";
import ClientImage20 from "../assets/Clients/Clients-20.png";
import ClientImage21 from "../assets/Clients/Clients-21.png";
import ClientImage22 from "../assets/Clients/Clients-22.png";
import ClientImage23 from "../assets/Clients/Clients-23.png";
import ClientImage24 from "../assets/Clients/Clients-24.png";

const ClientSlider = () => {
  const clientImages = [
    { path: ClientImage1 },
    { path: ClientImage2 },
    { path: ClientImage3 },
    { path: ClientImage4 },
    { path: ClientImage5 },
    { path: ClientImage6 },
    { path: ClientImage7 },
    { path: ClientImage8 },
    { path: ClientImage9 },
    { path: ClientImage10 },
    { path: ClientImage11 },
    { path: ClientImage12 },
    { path: ClientImage13 },
    { path: ClientImage14 },
    { path: ClientImage15 },
    { path: ClientImage16 },
    { path: ClientImage17 },
    { path: ClientImage18 },
    { path: ClientImage19 },
    { path: ClientImage20 },
    { path: ClientImage21 },
    { path: ClientImage22 },
    { path: ClientImage23 },
    { path: ClientImage24 },
    { path: ClientImage1 },
    { path: ClientImage2 },
    { path: ClientImage3 },
    { path: ClientImage4 },
    { path: ClientImage5 },
    { path: ClientImage6 },
    { path: ClientImage7 },
    { path: ClientImage8 },
    { path: ClientImage9 },
    { path: ClientImage10 },
    { path: ClientImage11 },
    { path: ClientImage12 },
    { path: ClientImage13 },
    { path: ClientImage14 },
    { path: ClientImage15 },
    { path: ClientImage16 },
    { path: ClientImage17 },
    { path: ClientImage18 },
    { path: ClientImage19 },
    { path: ClientImage20 },
    { path: ClientImage21 },
    { path: ClientImage22 },
    { path: ClientImage23 },
    { path: ClientImage24 },
  ];

  return (
    <>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 4,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="clients-images-carousel"
      >
        {clientImages.map((clientImage, idx) => (
          <SwiperSlide className="" key={idx}>
            <img
              className="grayscale hover:grayscale-0"
              src={clientImage.path}
              alt="clients that works with us"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClientSlider;
