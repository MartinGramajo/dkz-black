import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cabezas.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Image } from "react-bootstrap";
import ceo from "../../../assets/img/ceo.png";
import co from "../../../assets/img/nacho.png";
import creactivo from "../../../assets/img/fabri.png";
import LineaNaranjaCelu from "../../LineaNaranjaCelu";

export const CabezasSlider = () => {
  return (
    <div className="container">
      <div className="d-md-none d-block ">
        <LineaNaranjaCelu />
      </div>
      <div>
        <h2 className="peso-bold">CABEZAS DEL TEAM</h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="cartas-slider">
          <Image src={ceo} alt="Guillermo Sojo-CEO" fluid />
          <div className="py-3">
            <h4 className="peso-bold py-1"> Guillermo Sojo</h4>
            <h4 className="peso-regular py-1"> CEO</h4>
          </div>
          <div className="py-3 color-negroclaro-fondo">
            <h4 className="peso-bold ms-2"> +10</h4>
            <h5 className="peso-bold ms-2">DISEÑADORES</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image className="" src={co} alt="Nacho Pintos-CO-Founder" fluid />
          <div className="py-3">
            <h4 className="peso-bold py-1"> Nacho Pintos</h4>
            <h4 className="peso-regular py-1"> Co-Founder</h4>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <div className="container">
              <h4 className="peso-bold ms-2"> +5</h4>
              <h5 className="peso-bold ms-2">FILMMAKERS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className=""
            src={creactivo}
            alt="Fabricio Meriglio - Dir. Creativo"
            fluid
          />
          <div className="py-3">
            <h4 className="peso-bold py-1"> Fabricio Meriglio</h4>
            <h4 className="peso-regular py-1"> Dir. Creativo</h4>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <h4 className="peso-bold ms-2"> +5</h4>
            <h5 className="peso-bold ms-2">DEVELOPERS</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cartas-slider">
          <Image
            className=""
            src={ceo}
            alt="Laura Chanta-Dir. Comunicación"
            fluid
          />
          <div className="py-3">
            <h4 className="peso-bold py-1"> Laura Chanta</h4>
            <h4 className="peso-regular py-1"> Dir. Comunicación</h4>
          </div>
          <div className="py-3 color-negroclaro-fondo  ">
            <h4 className="peso-bold ms-2"> +5 </h4>
            <h5 className="peso-bold ms-2">COMMUNITY MANAGER</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
