import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./clientes.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Image } from "react-bootstrap";
import caja from "../../../assets/img/caja-popular.png";
import schilman from "../../../assets/img/schilman.png";

import LineaNaranjaCelu from "../../LineaNaranjaCelu";

export const ClientesCelu = () => {
  return (
    <div>
      <div className="d-md-none d-block ">
        <div className="container">
          <LineaNaranjaCelu />
          <div>
            <h2 className="peso-bold fs-32">CLIENTES</h2>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-white"
      >
        <SwiperSlide className="cartas-slider">
          <Image className="mx-5" src={caja} alt="caja popular" fluid />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="mx-5" src={schilman} alt="caja popular" fluid />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="mx-5" src={caja} alt="caja popular" fluid />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="mx-5" src={schilman} alt="caja popular" fluid />
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="mx-5" src={caja} alt="caja popular" fluid />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
