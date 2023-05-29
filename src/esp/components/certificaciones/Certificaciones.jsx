import React from "react";
import "../certificaciones/cpa.css";
import LineaNaranja from "../LineaNaranja";
import { Image } from "react-bootstrap";
import banner from "../../assets/img/certificaciones.png";
import bannerCelu from "../../assets/img/certificaciones-celu.png";
import consejo from "../../assets/img/consejologo.png";
import comunidad from "../../assets/img/comunidadCPA.png";
import LineaNaranjaCelu from "../LineaNaranjaCelu";

export default function Certificaciones() {
  return (
    <div>
      <div className="container padding-titulo ">
        <div className="d-none d-md-block">
          <LineaNaranja />
        </div>
        <div className="d-md-none d-block">
          <LineaNaranjaCelu />
        </div>
        <div className="py-4">
          <h2 className="peso-bold">CERTIFICACIONES</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center d-none d-sm-block ">
        <Image src={banner} fluid alt="Certificaciones" />
      </div>
      <div className="d-sm-none d-block">
        <Image className="w-100" src={bannerCelu} fluid alt="Certificaciones" />
      </div>

      <div className="">
        <div className="py-4 d-flex justify-content-center">
          <div className="py-4 texto-alineado">
            <h2 className="peso-bold ">FORMAMOS PARTE DEL</h2>
            <h3 className="peso-bold color-naranja ">
              consejo publicitario Argentino
            </h3>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center pb-5">
          <div className="row">
            <div className="col-6 col-md-6">
              <Image
                className="logo-cpa"
                src={consejo}
                fluid
                alt="Consejo Publicitario Argentino"
              />
            </div>
            <div className="col-6 col-md-6">
              {" "}
              <Image
                className="logo-cpa"
                src={comunidad}
                fluid
                alt="Comunidad del Consejo Publicitario Argentino"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
