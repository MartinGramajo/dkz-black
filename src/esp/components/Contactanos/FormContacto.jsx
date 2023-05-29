import React from "react";
import "../Contactanos/formcontacto.css";
import LineaNaranja from "../LineaNaranja";
import equipo from "../../assets/img/equipo.png";
import { Image } from "react-bootstrap";
import FormEmail from "./FormEmail";

export default function FormContacto() {
  return (
    <div className="container fondo-contacto ">
      <div className="row">
        <div className="col-12 col-md-6">
          <LineaNaranja />
          <div>
            <h2 className="peso-bold">
              {" "}
              ESTAS A UN FORM <br /> DE CONCRETAR TUS IDEAS
            </h2>
            <h4 className="color-naranja">de comenzar a crecer</h4>
          </div>
          <div className="pt-3 pb-1 d-none d-md-block ">
            <h5 className="ms-4">Tu proyecto</h5>
          </div>
        </div>
        <div className="d-md-block d-none">
          <FormEmail />
        </div>

        <div className="col-12 col-md-6  d-md-none d-block">
          <Image className="equipo" src={equipo} fluid alt="Equipo" />
        </div>

        <div className="d-block d-md-none">
          <h5 className="py-4 ms-4">Tu proyecto</h5>
          <FormEmail />
        </div>
      </div>
    </div>
  );
}
