import React from "react";
import { Image } from "react-bootstrap";
import iman from "../../../assets/icon/iman-cel.png";
import celular from "../../../assets/icon/icono-celu-mobile-diana.png";
import rendimiento from "../../../assets/icon/icono-informes-celu.png";
import comentario from "../../../assets/icon/icono-comentario-estrella-celu.png";
import megafono from "../../../assets/icon/icono-megafono-celu.png";
import metrica from "../../../assets/icon/icono-grafica-celu.png";

export const BeneficiosCel = () => {
  return (
    <div>
      <div className="py-4">
        <div className="text-center">
          <Image className="py-3" src={iman} alt="Aumenta tus ventas" fluid />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">Aumenta tus ventas</h4>
          <h5 className="peso-regular">
            Nos enfocamos en atraer más clientes para tu marca
          </h5>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={celular}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">Múltiples formatos</h4>
          <h5 className="peso-regular">
            Tus anuncios se elaboran de acuerdo a tus objetivos
          </h5>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={rendimiento}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">
            Informes de rendimiento y metricas
          </h4>
          <h5 className="peso-regular">
            Conocerás en vivo los datos de tus anuncios
          </h5>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={comentario}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">Equipo profesional</h4>
          <h5 className="peso-regular">
            Expertos en MKT digital con años de experiencia.
          </h5>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={megafono}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">Redes sociales</h4>
          <h5 className="peso-regular">
            Te posicionamos en todas las plataformas con un planning
            personalizado
          </h5>
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <Image
            className="py-3"
            src={metrica}
            alt="Aumenta tus ventas"
            fluid
          />
        </div>
        <div className="posicion-texto">
          <h4 className="peso-bold color-naranja py-2">Precios accesibles</h4>
          <h5 className="peso-regular">
            Tenemos planes que adaptan a diferentes presupuestos
          </h5>
        </div>
      </div>
    </div>
  );
};
