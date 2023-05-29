import React from "react";
import LineaNaranja from "../LineaNaranja";
import "../audioVisuales/audiovisual.css";
import BotonContactanos from "../BotonContactanos";

export default function Eventos() {
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <LineaNaranja />
        <div className="d-none d-md-block">
          <h1 className="peso-bold">EVENTOS</h1>
          <h5 className="py-4 peso-regular">
            En nuestra agencia, ponemos a tu disposición un equipo de
            profesionales altamente capacitados que son capaces de ejecutar y
            accionar eventos de gran envergadura de acuerdo a los más altos
            estándares de calidad organizativa y estilo.
          </h5>
          <h5 className="py-4 peso-regular">
            Nos aseguramos de que cada evento que organizamos sea una
            experiencia única e inolvidable, con un enfoque especial en la
            atención al detalle y la satisfacción del cliente. Además, ofrecemos
            servicios de cobertura audiovisual para que puedas recordar y
            compartir los momentos más destacados de tu evento empresarial.
            ¡Confía en nosotros para llevar tu evento al siguiente nivel!
          </h5>
        </div>
        <div className="d-md-none d-block">
          <h3 className="peso-bold">EVENTOS</h3>
          <h5 className="py-4 peso-regular">
            En nuestra agencia, ponemos a tu disposición un equipo de
            profesionales altamente capacitados que son capaces de ejecutar y
            accionar eventos de gran envergadura de acuerdo a los más altos
            estándares de calidad organizativa y estilo.
          </h5>
          <h5 className="py-4 peso-regular">
            Nos aseguramos de que cada evento que organizamos sea una
            experiencia única e inolvidable, con un enfoque especial en la
            atención al detalle y la satisfacción del cliente. Además, ofrecemos
            servicios de cobertura audiovisual para que puedas recordar y
            compartir los momentos más destacados de tu evento empresarial.
            ¡Confía en nosotros para llevar tu evento al siguiente nivel!
          </h5>
        </div>
        <div>
          <h2 className="peso-bold color-naranja py-4">
            Organización, profesionalismo, calidad y atención al detalle
          </h2>
          <div>
            <h3 className="peso-bold py-4"> Servicio llave en mano:</h3>
            <h5 className="peso-regular">
              Un evento llave en mano es un servicio integral en el que nos
              encargamos de todo el proceso, desde la planificación y diseño
              hasta la ejecución y coordinación del evento en sí mismo. Esto
              significa que DKZ se hace cargo de todos los aspectos, incluyendo
              la selección del lugar, el diseño del escenario, la contratación
              de proveedores, el catering, la logística, la decoración, la
              iluminación, el sonido, la seguridad, entre otros aspectos,
              dejandote libre de preocupaciones.{" "}
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
                    Mundo Country
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    Organización
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
                  <h4 className="peso-bold casos-texto px-4 pt-3">F1</h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    Organización
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
                    Tucuman Epic
                  </h4>
                  <h5 className="peso-regular casos-texto px-4 pb-3 pt-3">
                    Organización
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
