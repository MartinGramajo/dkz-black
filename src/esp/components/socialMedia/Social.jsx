import React from "react";
import LineaNaranja from "../LineaNaranja";
import "../socialMedia/social.css";
import BotonContactanos from "../BotonContactanos";
import { Image } from "react-bootstrap";
import socialMedia from "../../assets/img/social-media.png";
import socialMediaCelu from "../../assets/img/redes-sociales-mobile.png";

export default function Social() {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <LineaNaranja />
        <div className="d-none d-md-block">
          <h1 className="peso-bold">SOCIAL MEDIA</h1>
          <h5 className="py-4 peso-regular">
            En nuestra agencia, desarrollamos estrategias personalizadas para tu
            empresa con creatividad y compromiso a la hora de ejecutar proyectos
            digitales. Basándonos en una marcada trayectoria a la hora de
            generar contenidos, trabajamos para crear campañas y acciones
            específicas a través de las plataformas y canales de redes sociales,
            de acuerdo con la estrategia global de la empresa.
          </h5>
          <h5 className="py-4 peso-regular">
            Crear una estrategia de social media eficaz puede ayudar a hacer
            crecer tu negocio y crear un compromiso con el público.
          </h5>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold">SOCIAL MEDIA</h3>
          <h5 className="py-4 peso-regular">
            En nuestra agencia, desarrollamos estrategias personalizadas para tu
            empresa con creatividad y compromiso a la hora de ejecutar proyectos
            digitales. Basándonos en una marcada trayectoria a la hora de
            generar contenidos, trabajamos para crear campañas y acciones
            específicas a través de las plataformas y canales de redes sociales,
            de acuerdo con la estrategia global de la empresa.
          </h5>
          <h5 className="py-4 peso-regular">
            Crear una estrategia de social media eficaz puede ayudar a hacer
            crecer tu negocio y crear un compromiso con el público.
          </h5>
        </div>
        <div className="texto-estrategia-creatividad py-5 d-none d-md-block">
          <h2 className="peso-bold color-naranja py-4">ESTRATEGIA</h2>
          <h2 className="peso-bold color-naranja py-4">CREATIVIDAD</h2>
          <h2 className="peso-bold color-naranja py-4">COMPROMISO</h2>
        </div>
        <div className="d-md-none d-block">
          <div className="d-flex justify-content-evenly">
            <h2 className="peso-bold color-naranja py-4">ESTRATEGIA</h2>
            <h2 className="peso-bold color-naranja py-4">CREATIVIDAD</h2>
          </div>
          <div className="d-flex justify-content-center">
            <h2 className="peso-bold color-naranja py-4">COMPROMISO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-none d-md-block">
              {" "}
              <Image
                className="py-1"
                src={socialMedia}
                fluid
                alt="iconos social Media"
              />
            </div>
            <div className="d-md-none d-block">
              <div className="text-center">
                <Image
                  className="py-1"
                  src={socialMediaCelu}
                  fluid
                  alt="iconos social Media"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 contenido-centrado py-1">
            <h5 className="peso-regular">
              En DKZ creemos en la importancia de crear estrategias de marketing
              digital personalizadas que cuenten historias únicas que conecten
              con tu audiencia y generen el impacto que buscas.
            </h5>
          </div>
        </div>
        <div>
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
                  <h4 className="peso-bold casos-texto px-4 pt-3">
                    La Morocha
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    RRCC
                  </h5>
                </div>
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
