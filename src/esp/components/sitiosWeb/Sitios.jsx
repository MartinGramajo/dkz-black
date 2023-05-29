import React from "react";
import LineaNaranja from "../LineaNaranja";
import BotonContactanos from "../BotonContactanos";
import "./sitios.css";

export default function Sitios() {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <LineaNaranja />
        <div className="d-none d-md-block">
          <h1 className="peso-bold">SITIOS WEB</h1>
          <h5 className="py-4 peso-regular">
            Trabajamos sobre cada uno de nuestros desarrollos de manera
            exclusiva. Nuestras ideas parten desde una concepción inicial en la
            cual implementamos todos nuestros proyectos desde cero, sin
            utilización de contenidos realizados por terceros o código fuente
            reutilizable de otros trabajos, para DKZ cada cliente es un nuevo
            desafío. Trabajamos sobre cada uno de nuestros desarrollos de manera
            exclusiva.
          </h5>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold">SITIOS WEB</h3>
          <h5 className="py-4 peso-regular">
            Trabajamos sobre cada uno de nuestros desarrollos de manera
            exclusiva. Nuestras ideas parten desde una concepción inicial en la
            cual implementamos todos nuestros proyectos desde cero, sin
            utilización de contenidos realizados por terceros o código fuente
            reutilizable de otros trabajos, para DKZ cada cliente es un nuevo
            desafío. Trabajamos sobre cada uno de nuestros desarrollos de manera
            exclusiva.
          </h5>
        </div>
        <div>
          <h2 className="peso-bold color-naranja py-4">
            Tecnologías utilizadas en nuestros desarrollos:
          </h2>
          <div>
            <h4 className="peso-bold padding-item">
              {" "}
              • React + HTML 5 + CSS + Javascript
            </h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Linux + Apache + PHP + MySQL
            </h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Análisis funcional del sitio.
            </h4>
            <h4 className="peso-bold padding-item"> • UX UI</h4>
            <h4 className="peso-bold padding-item"> • Sitios Responsive</h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Codificación SEO Y SEM
            </h4>
            <h4 className="peso-bold padding-item">
              {" "}
              • Certificados SSL de seguridad
            </h4>
            <h4 className="peso-bold padding-item">
              • Integración de API´s y Webservices
            </h4>
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
                    La estancia
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    App Web
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
                    Mundo Country
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    App Web
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
                    Distribuidora Look
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    App Web
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
