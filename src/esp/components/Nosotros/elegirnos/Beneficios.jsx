import React from "react";
import { Image } from "react-bootstrap";
import iman from "../../../assets/icon/icono-iman.png";
import celular from "../../../assets/icon/icono-celular.png";
import rendimiento from "../../../assets/icon/icono-reloj.png";
import comentario from "../../../assets/icon/icono-comentario.png";
import megafono from "../../../assets/icon/icono-megafono.png";
import metrica from "../../../assets/icon/icono-metrica.png";

const datos = [
  {
    id: 1,
    imagen: "",
  },
];

export const Beneficios = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 col-lg-4">
        <div className="py-4 ">
          <div className="posicion-logo">
            <Image
              className="py-3 icono-width"
              src={iman}
              alt="Aumenta tus ventas"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">Aumenta tus ventas</h4>
            <h5 className="peso-regular">
              Nos enfocamos en atraer más clientes para tu marca
            </h5>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={celular}
              alt="Multiples formatos"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">Múltiples formatos</h4>
            <h5 className="peso-regular">
              Tus anuncios se elaboran de acuerdo a tus objetivos
            </h5>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={rendimiento}
              alt="Informes Rendimiento"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">
              Informes de rendimiento y métricas
            </h4>
            <h5 className="peso-regular">
              Conocerás en vivo los datos de tus anuncios
            </h5>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={comentario}
              alt="Equipo profesional"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">Equipo profesional</h4>
            <h5 className="peso-regular">
              Expertos en MKT digital con años de experiencia.
            </h5>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={megafono}
              alt="Redes Sociales"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">Redes sociales</h4>
            <h5 className="peso-regular">
              Te posicionamos en todas las plataformas con un planning
              personalizado
            </h5>
          </div>
        </div>
        <div className="py-4">
          <div className="posicion-logo">
            <Image
              className="py-4 icono-width"
              src={metrica}
              alt="Precios Accesibles"
              fluid
            />
          </div>
          <div className="posicion-texto">
            <h4 className="peso-bold color-naranja">Precios accesibles</h4>
            <h5 className="peso-regular">
              Tenemos planes que se adaptan a diferentes presupuestos
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
