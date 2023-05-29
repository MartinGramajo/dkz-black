import React from "react";
import LineaNaranja from "../LineaNaranja";
import LineaNaranjaCelu from "../LineaNaranjaCelu";
import { Image } from "react-bootstrap";
import mapa from "../../assets/img/mapa.png";
import mapaCelu from "../../assets/img/mapa-celu.png";

export default function Mapa() {
  return (
    <div className="container padding-titulo">
      <div className="d-none d-md-block">
        <LineaNaranja />
      </div>
      <div className="d-md-none d-block">
        <LineaNaranjaCelu />
      </div>
      <div className="pt-4 pb-2">
        <h2 className="peso-bold">POR EL MUNDO</h2>
        <h3 className="peso-bold color-naranja">transformando empresas</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="d-none d-sm-block ">
          <Image src={mapa} fluid alt="Mapamundi" />
        </div>
      </div>
      <div className="d-sm-none d-block ">
        <Image className="w-100" src={mapaCelu} fluid alt="Mapamundi" />
      </div>
    </div>
  );
}
