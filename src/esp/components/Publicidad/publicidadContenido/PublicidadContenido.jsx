import React from "react";
import LineaNaranja from "../../LineaNaranja";
import "./publicidadContenido.css";
import BotonContactanos from "../../BotonContactanos";
import { Card, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import BtnContact from "../../BtnContact";

export default function PublicidadContenido() {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <LineaNaranja />
        <div className="">
          <h1 className="peso-bold mb-4">PUBLICIDAD TRADICIONAL</h1>
          <h4 className="pt-5 pb-5 mb-3 peso-regular">
            Hacemos que tu marca llegue a públicos masivos por diferentes
            medios, prensa, televisión, radio, vallas, sextuples, autobuses y
            pantallas led gigantes. Contamos con los mejores convenios y una
            agenda de medios de máximo alcance y variabilidad de acuerdo a
            diferentes presupuestos
          </h4>
        </div>
        <div className="d-flex mb-5 pb-4">
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 ps-0 pe-4">
              <Card.Text className="">
                <h5 className="peso-bold interlineado2">
                  Es de vital importancia a la hora de hacer un posicionamiento
                  de marca, conjugar las diferentes estrategias publicitarias
                  que se hagan de manera digital, con estas acciones de
                  publicidad offline tradicional.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="carta-trans-servicios me-4">
            <Card.Body className="d-flex align-items-start py-0 pe-0 ps-4">
              <Card.Text className="">
                <h5 className="peso-regular interlineado2">
                  Por medio de este proceso estratégico, buscamos  mejorar la
                  capacidad de elección, simplificar los procesos de compra y
                  estimular la innovación comercial.
                </h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="swiper-publicidad"
        >
          <SwiperSlide>
            <div className="d-flex mb-5">
              <Image
                className="w-50 pe-4"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683681700/PAGINA%20NUEVA/Group_99_jlcvgw.png"
                alt="Imagen Publicidad"
                fluid
              />
              <Image
                className="w-50 ps-4"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683681700/PAGINA%20NUEVA/publi_amehtk.png"
                alt="Imagen Publicidad"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex mb-5">
              <Image
                className="w-50 pe-4"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683681700/PAGINA%20NUEVA/Group_99_jlcvgw.png"
                alt="Imagen Publicidad"
                fluid
              />
              <Image
                className="w-50 ps-4"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1683681700/PAGINA%20NUEVA/publi_amehtk.png"
                alt="Imagen Publicidad"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <h2 className="peso-bold pt-5">CASOS</h2>
        <div>
          <div className="d-flex justify-content-between flex-wrap mt-5 pb-4">
            <div className="fondo-naranja mb-5">
              <div
                className="fondo-casos"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                }}
              >
                <h4 className="peso-bold casos-texto px-4 pt-3">
                  Autoservicio Capo
                </h4>
                <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                  RRSS
                </h5>
              </div>
            </div>
            <div className="fondo-naranja mb-5">
              <div
                className="fondo-casos"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                }}
              >
                <h4 className="peso-bold casos-texto px-4 pt-3">TBC</h4>
                <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                  RRCC
                </h5>
              </div>
            </div>
            <div className="fondo-naranja mb-5">
              <div
                className="fondo-casos"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dlzcbrqax/image/upload/v1682032498/PAGINA%20NUEVA/cuadrada_-_copia_3_wijegz.png')`,
                }}
              >
                <h4 className="peso-bold casos-texto px-4 pt-3">La Morocha</h4>
                <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                  RRCC
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5 margin-negativo-boton ">
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
