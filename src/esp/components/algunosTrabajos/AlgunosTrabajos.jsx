import React from "react";
import LineaNaranja from "../LineaNaranja";
import { Image } from "react-bootstrap";
import "./algunosTrabajos.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper";

export default function AlgunosTrabajos() {
    return (
        <div className="padding-abajo">
            <div id="AlgunosTrabajos" className="container padding-titulo">
                <LineaNaranja />
                <h2 className="color-blanco mt-5 peso-bold">
                    ALGUNOS DE NUESTROS TRABAJOS
                </h2>
            </div>

            <div className="py-5">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    initialSlide={2}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        strech: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow]}
                    spaceBetween={100} // o margin en cada elemento
                    className="swiper-trabajos"
                >
                    <SwiperSlide>
                        <div className="fondo-naranja">
                            <Image
                                className="fotos-trabajos "
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_ju9xlu.png"
                                alt="imagen de nuestros trabajos"
                                fluid
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="fondo-naranja">
                            <Image
                                className="fotos-trabajos "
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_iqpilh.png"
                                alt="imagen de nuestros trabajos"
                                fluid
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="fondo-naranja">
                            <Image
                                className="fotos-trabajos "
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_4_cjchs7.png"
                                alt="imagen de nuestros trabajos"
                                fluid
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="fondo-naranja">
                            <Image
                                className="fotos-trabajos "
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png"
                                alt="imagen de nuestros trabajos"
                                fluid
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="fondo-naranja">
                            <Image
                                className="fotos-trabajos "
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_2_ksinbf.png"
                                alt="imagen de nuestros trabajos"
                                fluid
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
