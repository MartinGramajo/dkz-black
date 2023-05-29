import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Slide";

import LineaNaranja from "../../components/LineaNaranja";
import BtnContact from "../../components/BtnContact";
import "../carouselHome/carouselHome.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { Image } from "react-bootstrap";

import director from "../../assets/img/director.png";
import directorCelu from "../../assets/img/director-celu.png";
import LineaNaranjaCelu from "../LineaNaranjaCelu";

export default function CarouselHome() {
  return (
    <div className="container-fluid ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper d-none d-md-block"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>
            <Fade right>
              <Image
                className="carousel-imagenes"
                src={director}
                fluid
                alt="Fabri - Director Creativo"
              />
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>
            <Fade right>
              <Image
                className="carousel-imagenes"
                src={director}
                fluid
                alt="Fabri - Director Creativo"
              />
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <LineaNaranja />
              <div>
                <div className="texto-carousel ">
                  <h1 className="peso-bold ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h1>
                </div>
                <div className="texto-carousel-celu">
                  <h4 className="peso-bold  ">
                    TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
                  </h4>
                </div>

                <div className="padding-btn-contactanos ">
                  <BtnContact />
                </div>
              </div>
            </div>
            <Fade right>
              <Image
                className="carousel-imagenes"
                src={director}
                fluid
                alt="Fabri - Director Creativo"
              />
            </Fade>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Mobile */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper d-md-none d-block"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <div>
                <LineaNaranjaCelu />
              </div>

              <h3 className="peso-bold">
                TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
              </h3>
              <div className="text-center">
                <Image
                  className=""
                  src={directorCelu}
                  fluid
                  alt="Fabri - Director Creativo"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <div>
                <LineaNaranjaCelu />
              </div>

              <h3 className="peso-bold">
                TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
              </h3>
              <div className="text-center">
                <Image
                  className=""
                  src={directorCelu}
                  fluid
                  alt="Fabri - Director Creativo"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div>
              <div>
                <LineaNaranjaCelu />
              </div>

              <h3 className="peso-bold">
                TUS IDEAS <br /> DONDE NUNCA <br /> IMAGINASTE |
              </h3>
              <div className="text-center">
                <Image
                  className=""
                  src={directorCelu}
                  fluid
                  alt="Fabri - Director Creativo"
                />
              </div>
              <div className="py-4  d-flex justify-content-center">
                <BtnContact />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
