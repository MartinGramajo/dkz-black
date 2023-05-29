import React from "react";
import "../clientes/clientes.css";
import LineaNaranja from "../../LineaNaranja";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Image } from "react-bootstrap";
import caja from "../../../assets/img/caja-popular.png";
import schilman from "../../../assets/img/schilman.png";
import viento from "../../../assets/img/viento-sur.png";
import amaicha from "../../../assets/img/amaicha.png";
import morocha from "../../../assets/img/morocha.png";

export default function Clientes() {
  return (
    <div>
      <div className="container padding-titulo">
        <div>
          <LineaNaranja />
        </div>
        <div>
          <h2 className="peso-bold pb-5">CLIENTES</h2>
        </div>
      </div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes mx-5"
                src={caja}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={viento}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={amaicha}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={morocha}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
